import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Faqs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs
