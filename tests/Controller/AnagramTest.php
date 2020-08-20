<?php
namespace App\Tests\Controller;

use App\Controller\SearchController;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

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

    /**
     * Test anagram not to match hello=olleh11
     */
    function test2_checkAnagram()
    {
        $search_controller = new SearchController();
        $input_one = array(
            array(
                'anagram' => "hello"
            )
        );
        $input_two = "olleh11";
        $result = $search_controller->is_anagram($input_one, $input_two);
        $this->assertCount(0, $result);
    }


    /**
     * Test with punctuation
     */
    public function testAnagramsWithPunctuation()
    {
        $search_controller = new SearchController();
        $input_one = array(
            array(
                'anagram' => "kY22oTo3,"
            )
        );
        $input_two = "kYoTo223";
        $result = $search_controller->is_anagram($input_one,$input_two);
        $this->assertCount(0, $result);
    }

}