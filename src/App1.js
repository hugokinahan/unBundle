import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn'

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

function App1() {
  return (
    <main>
      <div className='box'>
        <div className='title'>
          <h1>un<strong>Bun</strong>dle</h1>
        </div>
        <h5>Subscribe to our newsletter</h5>
        <h3>Enter your email address to subscribe<strong>*</strong></h3>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
              {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }}/>}
              {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
            </div>
          )}
        />
      </div>
    </main>
  )
}

export default App1