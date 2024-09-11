const Email = () => {
    return (
        <div id="emailId" className="justify-center items-center flex flex-col h-screen">
            <a href="mailto:mrosales.tru@gmail.com">
                <img className="hover:opacity-25" 
                src="/images/Envelope.png" 
                />
            </a>

            <a href="mailto:mrosales.tru@gmail.com" className="email-link">
                <h1 className="text-3xl font-semibold mt-4 hover:opacity-50">mrosales.tru@gmail.com</h1>
            </a>
        </div>
    )
}

export default Email;