<?php
namespace App\Tests\Controller;

use App\Controller\SearchController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\DomCrawler\Crawler;

class AnagramTest extends WebTestCase
{
    /**
     * Test get status code "Success" on fetch endpoint
     */
    public function testStatusCodeOnFetch()
    {
        $client = static::createClient();
        $client->request('GET', '/fetch');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertTrue($client->getResponse()->isSuccessful());
    }

    /**
     * Test form
     */
     public function testFormData(){
         $client = static::createClient();
         $crawler = $client->request('GET', '/search');
         $client->followRedirects();
         $form = $crawler->filter('btn.btn-success')->form();
         $form['search']->setValue('isa');
         $client->submit($form);
     }

    /**
     * Test anagram match hello=olleh
     */
    function test_checkAnagram()
    {
        $search_controller = new SearchController();
        $input_one = array(
            array(
                'anagram' => "hello"
            )
        );
        $input_two = "olleh";
        $result = $search_controller->is_anagram($input_one, $input_two);
        $this->assertCount(1, $result);
    }

}