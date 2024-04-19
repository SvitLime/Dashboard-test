const user = [
    {
      
      "id": 1,
      "name": "Jane Cooper",
      "company": "Microsoft",
      "phone": "(225) 555-0118",
      "email": "john@gmail.com",
      "country": "United States",
      "Active": true
    },
    {
      
      "id": 2,
      "name": "Floyd Miles",
      "company": "Yahoo",
      "phone": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "country": "Kiribati",
      "Active": false
    },
    {
      
      "id": 3,
      "name": "Ronald Richards",
      "company": "Adobe",
      "phone": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "country": "Israel",
      "Active": false
    },
    {
      
      "id": 4,
      "name": "Marvin McKinney",
      "company": "Tesla",
      "phone": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "country": "Iran",
      "Active": true
    },
    {
      
      "id": 5,
      "name": "Jerome Bell",
      "company": "Google",
      "phone": "(629) 555-0129",
      "email": "jerome@google.com",
      "country": "Réunion",
      "Active": true
    },
    {
      
      "id": 6,
      "name": "Kathryn Murphy",
      "company": "Microsoft",
      "phone": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "country": "Curaçao",
      "Active": true
    },
    {
      
      "id": 7,
      "name": "Jacob Jones",
      "company": "Yahoo",
      "phone": "(208) 555-0112",
      "email": "jacob@yahoo.com",
      "country": "Brazil",
      "Active": true
    },
    {
      
      "id": 8,
      "name": "Kristin Watson",
      "company": "Facebook",
      "phone": "(704) 555-0127",
      "email": "kristin@facebook.com",
      "country": "Åland Islands",
      "Active": false
    },
    {
      
      "id": 9,
      "name": "John Smith",
      "company": "Microsoft",
      "phone": "(225) 555-0118",
      "email": "john@gmail.com",
      "country": "United States",
      "Active": true
    },
    {
      
      "id": 10,
      "name": "Emma Johnson",
      "company": "Yahoo",
      "phone": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "country": "Kiribati",
      "Active": false
    },
    {
      
      "id": 11,
      "name": "Michael Brown",
      "company": "Adobe",
      "phone": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "country": "Israel",
      "Active": false
    },
    {
      
      "id": 12,
      "name": "Sarah Williams",
      "company": "Tesla",
      "phone": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "country": "Iran",
      "Active": true
    },
    {
      
      "id": 13,
      "name": "David Jones",
      "company": "Google",
      "phone": "(629) 555-0129",
      "email": "jerome@google.com",
      "country": "Réunion",
      "Active": true
    },
    {
      
      "id": 14,
      "name": "Emily Taylor",
      "company": "Microsoft",
      "phone": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "country": "Curaçao",
      "Active": true
    },
    {
      
      "id": 15,
      "name": "James Wilson",
      "company": "Yahoo",
      "phone": "(208) 555-0112",
      "email": "jacob@yahoo.com",
      "country": "Brazil",
      "Active": true
    },
    {
      
      "id": 16,
      "name": "Olivia Clark",
      "company": "Facebook",
      "phone": "(704) 555-0127",
      "email": "kristin@facebook.com",
      "country": "Åland Islands",
      "Active": false
    },
    {
      
      "id": 17,
      "name": "Matthew Anderson",
      "company": "Microsoft",
      "phone": "(225) 555-0118",
      "email": "john@gmail.com",
      "country": "United States",
      "Active": true
    },
    {
      
      "id": 18,
      "name": "Sophia Martinez",
      "company": "Yahoo",
      "phone": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "country": "Kiribati",
      "Active": false
    },
    {
      
      "id": 19,
      "name": "William Thompson",
      "company": "Adobe",
      "phone": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "country": "Israel",
      "Active": false
    },
    {
      
      "id": 20,
      "name": "Ava Rodriguez",
      "company": "Tesla",
      "phone": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "country": "Iran",
      "Active": true
    },
    {
      
      "id": 21,
      "name": "Benjamin Moore",
      "company": "Google",
      "phone": "(629) 555-0129",
      "email": "jerome@google.com",
      "country": "Réunion",
      "Active": true
    },
    {
      
      "id": 22,
      "name": "Isabella Scott",
      "company": "Microsoft",
      "phone": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "country": "Curaçao",
      "Active": true
    },
    {
      
      "id": 23,
      "name": "Christopher Lee",
      "company": "Yahoo",
      "phone": "(208) 555-0112",
      "email": "jacob@yahoo.com",
      "country": "Brazil",
      "Active": true
    },
    {
      
      "id": 24,
      "name": "Mia Harris",
      "company": "Facebook",
      "phone": "(704) 555-0127",
      "email": "kristin@facebook.com",
      "country": "Åland Islands",
      "Active": false
    }
    

];

const renderUsers = (users) => {
    const table = document.querySelector('.table');
    
    for (let user of users) {
        const trContainer = document.createElement('tr');
        trContainer.classList.add('trContainer');

        const tdName = document.createElement('td');
        const tdCompany = document.createElement('td');
        const tdNumber = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdCountry = document.createElement('td');
        const tdStatus = document.createElement('td');

        const aNumber = document.createElement('a');
        const aEmail = document.createElement('a');

        tdName.textContent = user.name;
        tdName.classList.add('table-item');

        tdCompany.textContent = user.company;
        tdCompany.classList.add('table-item');

        aNumber.textContent = user.phone;
        aEmail.textContent = user.email;
        aNumber.classList.add('table-item');
        aNumber.classList.add('table-item-tel');
        aNumber.href = 'tel:+' + user.phone;
        
        aEmail.classList.add('table-item');
        aEmail.classList.add('table-item-mail');
        aEmail.href = 'mailto:' + user.email;

        tdCountry.textContent = user.country;
        tdCountry.classList.add('table-item');
        const par = document.createElement('p');
        if (user.Active) {
            
            par.textContent = 'Active';
            par.classList.add('status-active');
            par.classList.add('table-item');;
        } else {
            par.textContent = 'Inactive';
            par.classList.add('status-inactive');
            par.classList.add('table-item');
        }

        tdNumber.appendChild(aNumber);
        tdEmail.appendChild(aEmail);

        tdStatus.appendChild(par)

        trContainer.append(tdName, tdCompany, tdNumber, tdEmail, tdCountry, tdStatus);
        table.appendChild(trContainer);
    }
};

renderUsers(user);

