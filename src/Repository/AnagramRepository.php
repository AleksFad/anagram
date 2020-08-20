<?php

namespace App\Repository;

use App\Entity\Anagram;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Anagram|null find($id, $lockMode = null, $lockVersion = null)
 * @method Anagram|null findOneBy(array $criteria, array $orderBy = null)
 * @method Anagram[]    findAll()
 * @method Anagram[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnagramRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Anagram::class);
    }

    // /**
    //  * @return Anagram[] Returns an array of Anagram objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Anagram
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
