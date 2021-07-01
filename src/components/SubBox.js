import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url = 'https://bun@boisseau.co.uk.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn'

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

function SubBox() {

  return (
    <main>
      <div className='box'>
        <div className='title'>
          <h1 className='light-header'>un<strong className='strong-header'>Bun</strong>dle</h1>
          <p className='newsletter-title'>ART NEWSLETTER</p>
        </div>
        <h5><strong>Your essential bi-weekly guide to the art world - straight to your inbox</strong></h5>
        <h5>Sign up to UnBundle - Art news and buying opportunities in 5 mins or less</h5>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {status === 'sending' && <div style={{ color: 'green' }}>sending...</div>}
              {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }}/>}
              {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
            </div>
          )}
        />
      </div>
    </main>
  )
}

export default SubBox