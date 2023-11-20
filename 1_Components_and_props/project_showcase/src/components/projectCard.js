// map through the list and return name in div
// Display that!
// Lets create a smaller card component for each of these
// Destructure the data using {...}
// Create an li card that displays relevent info
// What happens if our data doesn't have what we need?

function ProjectCard({project}){
    const {id,about,image,link,name,phase} = project
    return(
        <li>
            <div>{name}</div>
            <div>{about}</div>
            <img src={image}/>
        </li>
    )
}
export default ProjectCard