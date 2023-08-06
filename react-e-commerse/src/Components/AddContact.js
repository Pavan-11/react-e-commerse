import { Button, Form, Container } from 'react-bootstrap';
const AddContact = (props) => {


    const submitHandler = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;

        const details = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone
        };
        props.onAddDetails(details);
        event.target.reset();

    }




    return (
        <Container className="vh-100 px-5 py-5" fluid={true}>

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="name">Name: </Form.Label>
                    <Form.Control type="text" id='name' name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='email'>Email: </Form.Label>
                    <Form.Control type="email" id='email' name='email' placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='phone'>Phone: </Form.Label>
                    <Form.Control type="number" id='phone' name='phone' placeholder="Phone Number" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>


        // <Form  onSubmit={submitHandler}>
        //     <label htmlFor="name">First name:</label>
        //     <input type="text" id="name" name='name' /><br></br>
        //     <label htmlFor="email">Email:</label>
        //     <input type="email" id="email" name='email' /><br></br>

        //     <label htmlFor="phone">Phone:</label>
        //     <input type="number" id="phone" name='phone' /><br></br>
        //     <Button type='submit'>Submit</Button>
        // </Form>
    )
}

export default AddContact;