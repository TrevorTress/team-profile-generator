module.exports = templateData => {
    //console.log(templateData)
  
    // destructure projects and about data from templateData based on their property key names
    // this will create three variables based on data in templateData
    // const {  } = templateData
    // console.log()
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="test-style.css">
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            <div class="employee-box">
                <h2>Trevor Tress</h2>
                <h3>Manager</h3>

                <div class="info-box">
                    <p id="id">
                        111
                    </p>
                    <p id="email">
                        www.trevor.com
                    </p>
                    <p id="office number">
                        222
                    </p>
                </div>
            </div>

            <div class="employee-box">
                <h2>Johnny Mocny</h2>
                <h3>Engineer</h3>

                <div class="info-box">
                    <p id="id">
                        444
                    </p>
                    <p id="email">
                        johnny@uh
                    </p>
                    <p id="office number">
                        www.office.com
                    </p>
                </div>
            </div>

            <div class="employee-box">
                <h2>Zach Burcar</h2>
                <h3>Manager</h3>

                <div class="info-box">
                    <p id="id">
                        111
                    </p>
                    <p id="email">
                        www.trevor.com
                    </p>
                    <p id="office number">
                        222
                    </p>
                </div>         
            </div>

            <div class="employee-box">
                <h2>Luke Nesbitt</h2>
                <h3>Manager</h3>

                <div class="info-box">
                    <p id="id">
                        111
                    </p>
                    <p id="email">
                        www.trevor.com
                    </p>
                    <p id="office number">
                        222
                    </p>
                </div>
            </div>
        </main>

    </body>
    </html>
    `
}