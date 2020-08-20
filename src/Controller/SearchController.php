<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    /**
     * Simple algorithm function to check if array value and search value are anagrams to each other.
     * If their count chars in word are same = they are anagrams
     * @param $result
     * @param $query
     * @return array
     */
    public function is_anagram($result, $query) {
        $foundAnagrams = [];
        foreach($result as $word){
            if(count_chars($query, 1) == count_chars($word['anagram'], 1)){
                $foundAnagrams[] = $word;
            }
        }
        return $foundAnagrams;
    }

    /**
     * Sanitize and trim search input.
     * Create query using create builder and pass value
     * QUERY LOGIC:
     *  - anagram length needs to be same as searched value
     *  - anagram need to consist of 1 chart as searched value (optional choice, but decided to leave that)
     *  - anagram cannot be same as searched value. Example: user_input(hello) != DB(hello)
     * Found anagrams deliver to Front-End
     * @Route("api/search", name="anagram_result")
     * @param Request $request
     * @return Response
     */
    public function search(Request $request)
    {
        $foundAnagrams = [];
        if($request->getMethod() == 'POST') {
            $query = $request->request->get('search');
            $query = filter_var(trim(strtolower($query)),FILTER_SANITIZE_STRING);
            $query_first = $query[0];
            $query_length = strlen($query);

            $entityManager = $this->getDoctrine()->getManager();
            $qb = $entityManager->createQueryBuilder();
            $qb->select('anagram')
                ->from('anagram', 'a')
                ->add('where', $qb->expr()->andX(
                    $qb->expr()->eq($qb->expr()->length('a.anagram'), $query_length),
                    $qb->expr()->neq('a.anagram', $qb->expr()->literal("$query")),
                    $qb->expr()->like('a.anagram', $qb->expr()->literal("%$query_first%"))
                ));
            $statement = $entityManager->getConnection()->prepare($qb);
            $statement->execute();
            $result = $statement->fetchAll();
            $foundAnagrams = $this->is_anagram($result, $query);
        }

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(json_encode(
            $foundAnagrams
        ));
        return $response;
    }
}
