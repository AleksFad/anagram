<?php

namespace App\Entity;

use App\Repository\AnagramRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AnagramRepository::class)
 */
class Anagram
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $anagram;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getAnagram()
    {
        return $this->anagram;
    }

    /**
     * @param mixed $anagram
     */
    public function setAnagram($anagram)
    {
        $this->anagram = $anagram;
    }
}
