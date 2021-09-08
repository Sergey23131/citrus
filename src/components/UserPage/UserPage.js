import UserInfo from "../UserInfo/UserInfo";
import './userpage.css';

export default function UserPage() {
    return (

        <div className="UserPage">
            <div className={'info-box'}>
                <div className={'img-box'}>
                    <img
                        src="https://st3.depositphotos.com/9881890/i/600/depositphotos_133960224-stock-photo-smiling-young-man.jpg"
                        className={'user_img'} alt=""/>
                </div>
                <div className={'main-info'}>
                    <UserInfo/>
                    <h3>Phone: 380000200002</h3>
                    <h3>City: Kiev</h3>
                    <h3> Info:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam aliquid,
                        architecto at autem blanditiis corporis cum doloremque earum eos expedita ipsa itaque molestiae,
                        nihil nostrum porro quaerat, quam repellat sed veniam voluptate voluptatum! Alias blanditiis
                        deserunt eum excepturi libero nulla odio officia, quaerat repudiandae sunt? Cupiditate et
                        nostrum numquam porro soluta? A alias amet assumenda cumque, dignissimos dolor dolorum eaque
                        explicabo fugiat id iusto libero magnam molestiae necessitatibus, nobis odio omnis placeat quia
                        quo repellat repellendus totam voluptate! Adipisci alias aliquid architecto, dolore eligendi ex
                        exercitationem facilis hic natus non quasi quidem quo rem, reprehenderit repudiandae, unde
                        voluptatibus. </p>
                </div>
            </div>
        </div>
    );
}
