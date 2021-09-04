export default function StarsRating({item}) {

    return (
        <div className="StarsRating">
            <div className={'rating_body'}>
                <div className={'rating_active'}>
                </div>
                <div className={'rating_items'}>
                    <input type={"radio"} className={'rating_item'} value={'1'} name={'rating'}/>
                    <input type={"radio"} className={'rating_item'} value={'2'} name={'rating'}/>
                    <input type={"radio"} className={'rating_item'} value={'3'} name={'rating'}/>
                    <input type={"radio"} className={'rating_item'} value={'4'} name={'rating'}/>
                    <input type={"radio"} className={'rating_item'} value={'5'} name={'rating'}/>
                </div>
            </div>

            <div className={'rating_value'}>{item.vote_average}</div>
        </div>
    );
}
