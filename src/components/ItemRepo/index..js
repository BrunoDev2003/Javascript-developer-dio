import { Item } from "../item/styles";

function ItemRepo({repo, handleRemoveRepo}) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <Item onClick={(handleRemove)}>
            <h1>{repo.name}</h1>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank"></a>
            <a href="#" rel="noreferrer" className="remover"></a>
            <hr/>
        </Item>
    )
}


export default Item;