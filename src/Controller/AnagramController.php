<?php

namespace App\Controller;

use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AnagramController extends AbstractController
{
    /**
     * Home route. Render React app.js
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * Fetch data from url and send array to execute method
     * @Route("/api/fetch", name="fetch")
     */
    public function fetch()
    {
        $url ='http://www.eki.ee/tarkvara/wordlist/lemmad2013.txt';
        try {
            $response = $this->fetchUrl($url);
            $wordArray = explode("\n", $response);
            $this->execute($wordArray);

        } catch (Exception $e) {
            error_log('Fetch URL failed: ' . $e->getMessage() . ' for ' . $url);
        }
        return new Response();
    }

    /**
     * Create query from array values and insert data to database
     * @param $words
     */
    public function execute($words)
    {
        $sql = array();
        $em = $this->getDoctrine()->getManager();
        foreach( $words as $word ) {
            $sql[] = '("' .$word. '")';
        }
        //fastest way
        $RAW_QUERY = 'INSERT IGNORE INTO anagram (anagram) VALUES '.implode(',', $sql);
        $statement = $em->getConnection()->prepare($RAW_QUERY);
        $statement->execute();
    }


    /**
     * Get content from url using CURL function
     * @param $uri
     * @return false|string
     * @throws Exception
     */
    function fetchUrl($uri)
    {
        $handle = curl_init();

        curl_setopt($handle, CURLOPT_URL, $uri);
        curl_setopt($handle, CURLOPT_POST, false);
        curl_setopt($handle, CURLOPT_HEADER, true);
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 10);

        $response = curl_exec($handle);
        $hlength  = curl_getinfo($handle, CURLINFO_HEADER_SIZE);
        $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
        $body     = substr($response, $hlength);

        // If HTTP response is not 200, throw exception
        if ($httpCode != 200) {
            throw new Exception($httpCode);
        }

        return $body;
    }
}
