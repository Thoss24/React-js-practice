import classes from './PracticeArea.module.css'

const PracticeArea = (props) => {
    return (
        <div className={classes['practice-area']}>{props.children}</div>
    )
}

export default PracticeArea