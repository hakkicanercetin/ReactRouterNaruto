/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Main } from '../types';
import { ClipLoader } from 'react-spinners';

async function getNaruto(page:number=1) {
  const response = await fetch("https://dattebayo-api.onrender.com/characters?page="+page)
  const data:Main = await response.json()
  return data
}

function Characters() {
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(true)
  const [myData, setMyData] = useState<Main>( {
    characters: [],
    currentPage: 0,
    pageSize: 0,
    total: 0,
  })
  useEffect(()=>{
    (async () =>{
      try {
        const result = await getNaruto(page)
        setMyData(result)
        setLoading(false)
      } catch (e:any) {
        console.log(e)
      }
    })()
  },[page])
  function NextPage(){
    setPage(oldPage => oldPage+1)
  }
  function PrevPage(){
    setPage(oldPage => oldPage-1)
  }
  if(loading)
  {
    return <ClipLoader color="#ffff00"/>;
  }
  console.log(page)
  return (
    <>
      <div className='d-flex justify-content-between'>
      <Button disabled = {myData.currentPage <= 1} variant="warning" onClick={PrevPage}>Önceki Sayfa</Button>
      <Button disabled = {myData.currentPage >= 72} variant="warning" onClick={NextPage}>Sonraki Sayfa</Button>
      </div>
      <div className='row container-fluid'>
      {myData.characters.map((data)=>(
        <div key={data.id} className={"d-flex justify-content-center col-12 col-md-4 col-lg-3"}>
          <Card style={{ width: '18rem' }} className='my-3'>
      <Card.Img variant="top" src={data.images[0]} />
      <Card.Body>
        <Card.Title style={{color:"yellow"}}>{data.name}</Card.Title>
          {data.personal ? (<Card.Text>Gender: {data.personal.sex}</Card.Text>) : <Card.Text>Gender: undefined</Card.Text>}
        {
          data.debut ?(<Card.Text>Appears In: {data.debut.appearsIn}</Card.Text>) : <Card.Text>Appears In: undefined</Card.Text>
        }
        <div className='text-center'>
          <Button href={"characters/"+(data.id).toString()} variant="link" style={{color:"yellow"}}>More Info</Button>
        </div>
      </Card.Body>
    </Card>
        </div>
      ))}
      </div>
      
    </>
  )
}

export default Characters
