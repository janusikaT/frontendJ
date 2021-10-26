import React, { useEffect,useState } from "react";

import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";

const Param = ()=>{

    const {id} = useParams();
   return id;
          
      

}
 export default Param

