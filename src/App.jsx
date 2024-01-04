import Button from "./Button.jsx";
import Student from "./Student.jsx";

function App() {
  return(
    <>
       <Student name="Sayem Bhuiyan" age={20} isStudent={true}/>
       <Student name='Fahim Sarker' age={21} isStudent={false}/>
       <Student name="Ashraful Islam Akash" age={20} isStudent={true}/>
       <Student name="Shajib Sarkar" age={23} isStudent={true}/>
       <Student />
       <Button/> 
    </>
  );
}

export default App
