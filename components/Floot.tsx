import { FlootMeta , FlootNFT} from '../Interface/metadata'
const base64json = require('base64json')

const Floot = ({ nft }:{ nft: FlootNFT  }) => {
    try{
        const tokenUri: string = nft.token_uri.split('data:application/json;base64,')[1]
        let fl : FlootMeta = base64json.parse(tokenUri);
        return <div>
            <a  href={`https://testnets.opensea.io/assets/${nft.token_address}/${nft.token_id}`}
                target="_blank" rel="noreferrer">
                <img src={fl.image} alt={fl.name} className="mt-3 shadow-lg border border-black py-3" />
            </a> 
            <div className="flex mt-3" style={{ fontSize: '0.65rem' }}>
                <span className="flex-grow opacity-50">Floot #{nft.token_id}</span>
                <a  target="_blank" rel="noreferrer"
                    href={`https://opensea.io/${nft.owner_of}`} 
                    className="opacity-25 hover:opacity-100 cursor-pointer" >
                        Owner: [{nft.owner_of.substring(0,16)}...]
                </a>
            </div>
        </div> 
    }catch(e){
        return <span></span>
    }
    
}

export default Floot