import React from "react";
import styled from "styled-components";

export default function ImageUploader(){
    function imageIsLoaded() { 
        alert(this.src);  // blob url
        // update width and height ...
      }

    window.addEventListener('load', function() {
        document.querySelector('input[type="file"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('img');  // $('img')[0]
                img.src = URL.createObjectURL(this.files[0]); // set src to blob url
                img.onload = imageIsLoaded;
            }
        });
      });


    

    return <DivStyled> 
         <form>
    
        <input type="file" name=""/><br/>
        <textarea placeholder="Type a description of image"></textarea>
        <img id="myImg" src="#" alt="" />
        <button>Submit</button>
         </form>
       
        </DivStyled>   
          

}
 const DivStyled = styled.div`
background-color:rgb(240, 226, 243);
border: rgb(240, 192, 246) 1px solid;
margin:0 auto;
height: auto;

form{
    display:flex;
    flex-direction:column;
    img{max-width:400px;
    max-height:800px;
    overflow:hidden;}
    button{width:100px}
}
`;