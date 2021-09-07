import './Starts.css';

export default function StarsRating({item}) {

    return (

        <div className="StarsRating">
            <div className={'Rating_body'}>
                <div className={'Rating_active'}>
                </div>
                <div className={'Rating_items'}>
                    <input type={"radio"} className={'Rating_item'} value={'1'} name={'rating'}/>
                    <input type={"radio"} className={'Rating_item'} value={'2'} name={'rating'}/>
                    <input type={"radio"} className={'Rating_item'} value={'3'} name={'rating'}/>
                    <input type={"radio"} className={'Rating_item'} value={'4'} name={'rating'}/>
                    <input type={"radio"} className={'Rating_item'} value={'5'} name={'rating'}/>
                </div>
            </div>

            <div className={'Rating_value'}>{item.vote_average}</div>
        </div>

    );
}
