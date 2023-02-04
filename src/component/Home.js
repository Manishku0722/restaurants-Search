import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Fooddata from './Data'

const Home = () => {

    const [menu, setMenu] = useState(Fooddata);

    const filteritems = (curritems)=>{
        const updateitems = Fooddata.filter((curr,ind)=>{
            return curr.category == curritems
        });

        setMenu(updateitems); 
    }

    return (
        <div className='container mt-2'>
            <h2 className='text-center mb-2' style={{ fontWeight: 400 }}>Search Your Food</h2>
            <div className='btn-container d-flex justify-content-between mt-4'>
                <Button variant="primary" onClick={()=>filteritems("punjabi")}>Punjabi</Button>
                <Button variant="danger" onClick={()=>filteritems("vadapav")}>vadapav</Button>
                <Button variant="success" onClick={()=>filteritems("Pizza")}>Pizza</Button>
                <Button variant="primary" onClick={()=>filteritems("Chai")}>Chai</Button>
                <Button variant="danger" onClick={()=>filteritems("Frankie")}>Franki</Button>
                <Button variant="success" onClick={()=>filteritems("punjabi")}>All</Button>
            </div>

            <div className='container mt-5'>
                <div className='row d-flex justify-content-center align-iteams-center'>
                    {
                        menu.map((el, ind) => {
                            return (
                                <>
                                    <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-2">
                                        <Card.Img variant="top" src={el.imgdata} style={{height:"16rem"}} className="mt-3" />
                                        <Card.Body>
                                            <Card.Title>{el.rname}</Card.Title>
                                            <Card.Text>
                                                Price: {el.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home