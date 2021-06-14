import { Button, Form } from "react-bootstrap";

export default function Logout({ setToken }: { setToken: any }) {

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = {
      username: "",
      password: "",
      userType: ""
    };
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h2>Si prepričan/-a da se želiš odjaviti? </h2>
      <br />
      <Form onSubmit={handleSubmit}>        
        <br />
        <Button variant="primary" type="submit">
          Odjava
        </Button>
      </Form>
    </div>
  );
}
