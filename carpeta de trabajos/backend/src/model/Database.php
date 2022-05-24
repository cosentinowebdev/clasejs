<?php
  class Database{
    private $db;

      function __construct($hostName, $dbName, $userName, $passWord)
      {
        try {
          $this->db = new PDO("mysql:dbname={$dbName};host={$hostName}",
          $userName,
          $passWord);
          $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $this->db->exec("set names utf8");
        }
        catch(PDOException $e){
          return 'SomeThing wrong in Connect';
        }
	    }


      public function read ($tbl, $clmns, $where = '')
      {
        try {
          $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $stmt = $this->db->query("SELECT {$clmns} FROM {$tbl}");
          if ($where != '') {
            $stmt = $this->db->query("SELECT {$clmns}
              FROM {$tbl}
              WHERE {$where}");
          }
          $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
          return $rows;
        }
        catch(PDOException $e){
          return 'SomeThing wrong in read Data';
        }
      }



      public function write($tbl, $clmns, $values)
      {
        try {
          $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $num = $this->db->exec("INSERT INTO {$tbl} ($clmns) VALUES ({$values})");
          return $num;
        }
        catch(PDOException $e){
          return 'SomeThing wrong in writing Data';
        }

      }

//Editar Funcion

      public function editar($tbl, $clmn, $where = '')
      {
        try {
          $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          if ($where != '') {
            $num = $this->db->exec("UPDATE {$tbl} SET {$clmn} WHERE {$where}");
          }
          return $num;
        }
        catch(PDOException $e){
          return 'SomeThing wrong in update Data';
        }
      }

// Borrar funcion

      public function borrar($tbl, $where = '')
      {
        try {
          $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          if ($where != '') {
            $num = $this->db->exec("DELETE FROM {$tbl} WHERE {$where}");
          }
          return $num;
        }
        catch(PDOException $e){
          return 'SomeThing wrong in Delete Data';
        }
      }

  }
?>