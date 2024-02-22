/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { Root } from "../characterTypes";
import { useParams } from "react-router-dom";
import { Spoiler, Table } from "@mantine/core";
import { ClipLoader } from "react-spinners";


export default function CharacterPage(){
    const { id } = useParams();
    const [loading,setLoading] = useState(true)
    const [characterData,setCharacterData] = useState<Root | null>(null);
    async function getCharacterData(id:number) {
        const response = await fetch("https://dattebayo-api.onrender.com/characters/"+id)
        const data:Root = await response.json();
        return data
    }
    useEffect( ()=>{
        (async () => {
            const character = await getCharacterData(Number(id))
            setCharacterData(character)
            setLoading(false)
        })()
    },[id])
    
    if (loading || characterData === null) {
        return <ClipLoader color="#36d7b7" /* width={100} *//>
      }
       
    return (
        <> 
            <div className="d-flex flex-column align-items-center py-5">
        {
             <div className="d-flex flex-column justify-content-center">
             <h1>{characterData.name}</h1>
             {characterData.images && <img src={characterData.images[0]}/>}
             {/* {characterData.personal?.titles && characterData.personal?.titles.map((title,index) =><p key={index}>{title.toUpperCase().replace(/\([^)]+\)/g, "").replace(/[^A-Za-z]/g, "")}</p>)} */}
            </div>
        }
        {   characterData.debut &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        <h5>Debut</h5>
                        {Object.keys(characterData.debut).map((x,index)=><Table.Tr key={index}><Table.Th>{x}</Table.Th><Table.Td>{characterData.debut[x]}</Table.Td></Table.Tr>)}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
            </div>
        }
        {
            characterData.family &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                            <h5>Family</h5>
                        {Object.keys(characterData.family).map((x,index)=><Table.Tr key={index}><Table.Th>{x}</Table.Th><Table.Td>{characterData.family[x]}</Table.Td></Table.Tr>)}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
            </div>
        }
        {
            characterData.jutsu &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                            <h5>Jutsu</h5>
                        {characterData.jutsu.map((x,index)=><Table.Tr key={index}><Table.Td>{x}</Table.Td></Table.Tr>)}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
            </div>
        }
        {
            characterData.natureType &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        <h5>Nature Type</h5>
                        {characterData.natureType.map((x,index)=><Table.Tr key={index}><Table.Td>{x}</Table.Td></Table.Tr>)}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
            </div>
        }
        {
            characterData.personal &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        <h5>Personal</h5>
                        {Object.keys(characterData.personal)
                .map((x,index)=>(x != "titles" && <Table.Tr key={index}><Table.Th>{x}</Table.Th><Table.Td> {typeof characterData.personal[x] != 'object'
                ? characterData.personal[x] 
                : Array.isArray(characterData.personal[x])
                ? Object.values(characterData.personal[x]).map((y:any,index)=>(<ul key={index}><li>{y}</li></ul>))
                : Object.keys(characterData.personal[x]).map((z,index) => <ul key={index}><li>{z + " : " + characterData.personal[x][z]}</li></ul>)
                }</Table.Td></Table.Tr> ))}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
            </div>
        }
        {
            characterData.rank &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        <h5>Rank</h5>
                {Object.keys(characterData.rank)
                .map((x,index)=>(<Table.Tr key={index}><Table.Th>{x}</Table.Th><Table.Td> {typeof characterData.rank[x] != 'object'
                ? characterData.rank[x] 
                : Array.isArray(characterData.rank[x])
                ? Object.values(characterData.rank[x]).map((y:any,index)=>(<ul key={index}><li>{y}</li></ul>))
                : Object.keys(characterData.rank[x]).map((z,index) => <ul key={index}><li>{z + " : " + characterData.rank[x][z]}</li></ul>)
                }</Table.Td></Table.Tr> ))}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
                
            </div>
        }
        {
            characterData.tools &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        <h5>Tools</h5>
                        {characterData.tools.map((x,index)=><Table.Tr key={index}><Table.Td>{x}</Table.Td></Table.Tr>)}
                        </Spoiler>
                    </Table.Tbody>
                </Table>
            </div>
        }
        {
            characterData.voiceActors &&
            <div>
                <Table striped highlightOnHover>
                    <Table.Tbody>
                        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        <h5>Voice Actors</h5>
                        {Object.keys(characterData.voiceActors)
                 .map((x,index)=><Table.Tr key={index}><Table.Th>{x}</Table.Th><Table.Td> {typeof characterData.voiceActors[x] != 'object' 
                 ? characterData.voiceActors[x] 
                 : Array.isArray(characterData.voiceActors[x])
                 ? Object.values(characterData.voiceActors[x]).map((y)=>(y))
                 : Object.keys(characterData.voiceActors[x]).map(z => z + " : " + characterData.voiceActors[x][z]) }</Table.Td></Table.Tr>)}
                        </Spoiler>
                </Table.Tbody>
                </Table>
            </div>
        }
            </div>
        </>
    )
}