import Header from "../Header/Header"
import classes from "./MemPage.module.css"

const MemPage = () => {
    return (
        <div className={classes.MemPage}>
            <Header />
            <div className={classes.ContentWrapper}>
                <div>
                    <div className={classes.CaptionWrapper}>
                    <p className={classes.caption}>Еб@ный рот этого казино</p>
                    </div>
                    
                    <div className={classes.ImgWrapper}>
                    <img className={classes.img} src='https://memepedia.ru/wp-content/uploads/2018/03/ebanyy-rot-etogo-kazino.png' alt='Казино'></img>
                    </div>
                    
                    <div className={classes.TextWrapper}>
                        <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam voluptatem facere eligendi repellat quibusdam iusto dolorem natus asperiores voluptate. Aliquam numquam nobis ipsa, deserunt quaerat doloremque porro? Eaque, est!</p>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default MemPage