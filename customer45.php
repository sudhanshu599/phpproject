<?php
class customer{
    public $fname;
    public $lname;
    public $pno;
    public $email;
    public $event1;

    private $conn;

    public function __construct($conn)
    {
        $this->conn=$conn;
        
    }
    public function insertcustomerdetail($obj){
        $sql="INSERT INTO eventer (fname,lname,pno,email,event1) VALUES('$obj->fname','$obj->lname','$obj->pno','$obj->email','$obj->event1');";
            $result=mysqli_query($this->conn,$sql);
            if($result==TRUE){
                $msg=["Form successfully submitted"];
            }
            else
            {
                $msg=["Error occurred while submitting information. Please try again later."];
            }
            
            return json_encode($msg);
    }
    public function getcutomerdetails(){
        $sql="SELECT * FROM eventer;";
        $result=mysqli_query($this->conn,$sql);
        $arr=array();
        if(mysqli_num_rows($result)>0)
        {
            while($row=mysqli_fetch_assoc($result))
            {
                $arr[]=$row;
            }
        }
        return json_encode($arr);      
    }

}
?>