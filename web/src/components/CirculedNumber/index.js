import './styles.css'

export function CirculedNumber({number}){
    return(
        <div className='circle'>
            <p className='number'>{number}</p>
        </div>
    )
}