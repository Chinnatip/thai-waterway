const Barcode = require('react-barcode');

const FlootCard = ({ price, howTo, ingredient, flootId }: {
    price: number
    howTo: string
    ingredient: string[]
    flootId: string
}) => {
    return <div className="p-5 shadow-lg  border-black border-2">
        <div className="w-full flex font-bold text-xl">
            <div className="flex-grow">Floot</div>
            <span className="flex items-center">
                {price}
                <img src="ic_eat.png" className="ml-1" style={{ display: 'inline', width: '32px' }} />
            </span>
        </div>
        <div className="border border-dashed border-black my-2"></div>
        <h4 className="text-xs">{howTo}</h4>
        <div className="border border-dashed border-black my-2"></div>
        {ingredient.map((i, idx) =>
            <p key={idx} className="text-sm">{i}</p>
        )}
        <div className="border border-dashed border-black my-2"></div>
        <div className="w-full flex justify-center">
            <Barcode fontSize={10} height={18} width={0.8} background="#FEF8ED" value={flootId} />
        </div>
    </div>
}

export default FlootCard