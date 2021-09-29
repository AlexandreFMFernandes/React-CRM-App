import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'


function generatePDF(clients) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Users',
            fontSize: 15,
            bold: true,
            margin: [15,20,0,45]
        }
    ];

    const data = clients.map((client) => {
        return[
            {text: client.id, fontSize: 9, margin:[0,2,0,2]},
            {text: client.name, fontSize: 9, margin:[0,2,0,2]},
            {text: client.email, fontSize: 9, margin:[0,2,0,2]},
            {text: client.mobile, fontSize: 9, margin:[0,2,0,2]}
        ]
    });

    const reportDetails = [
        {
            table: {
                headerRows: 1,
                widths: ['*','*','*','*'],
                body: [
                    [
                        {text: 'ID', style: 'tableHeader', fontSize: 10},
                        {text: 'Name', style: 'tableHeader', fontSize: 10},
                        {text: 'E-mail', style: 'tableHeader', fontSize: 10},
                        {text: 'Mobile', style: 'tableHeader', fontSize: 10}
                    ],
                    ...data
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ];

    function reportFooter(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment:'right',
                fontSize: 9,
                margin: [0,10,20,0]
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [reportDetails],
        footer: reportFooter
    }

    pdfMake.createPdf(docDefinitions).download();
}


export default generatePDF;