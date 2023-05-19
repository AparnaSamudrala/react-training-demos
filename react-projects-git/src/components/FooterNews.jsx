function FooterNews(){
    let url = "#";
    return(
        <footer>
            <div className="flinks-left">
                <a href={url}>Terms of Service</a>
                <a href={url}>Privacy Policy</a>
                <span>&copy; 2009 seamless receipts</span>
            </div>
            <div className="flinks-right">
                <a href={url}>Home</a>
                <a href={url}>About Us</a>
                <a href={url}>Careers</a>
                <a href={url}>Contact</a>
            </div>
	</footer>
    )
}

export default FooterNews;