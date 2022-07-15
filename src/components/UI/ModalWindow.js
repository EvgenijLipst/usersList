import Button from './Button';
import Card from './Card';
import './ModalWindow.css'

const ModalWindow = (props) => {
    return (
        <div>
            <div className='backdrop' onClick={props.onError}></div>
            <Card className='modal'> 
                    <header className='header'><h2>{props.title}</h2></header>
                    <content className='content'>
                        <p>{props.content}</p>
                    </content>
                    <footer className='actions'>
                        <Button onClick={props.onError}>Закрыть</Button>
                    </footer>
                </Card>
          
        </div>
    )
}

export default ModalWindow;