function PDFView(pdf){                 
    return(
        <iframe title="pdf" src={pdf.url} width="100%" height="1000px" />
    );
}

export default PDFView;