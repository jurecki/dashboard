const app = {

    toogleMenu: function() {
        document.querySelector('.hamburger').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.side-nav').classList.toggle('not-active');
            document.querySelector('.side-logo-icon').classList.toggle('not-active');
            document.querySelector('.side-footer').classList.toggle('not-active');
        });
    },

    showChart: function () {
        var ctx = document.getElementById('myChart').getContext('2d');

        var chart = new Chart(ctx, {
            // 1
            type: 'bar',
            data: {
                // 2
                labels: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10' ],
                // 3
                datasets: [
                    {
                        // 4
                        label: 'Signups',
                        // 5
                        backgroundColor: '#8DBEC8',
                        borderColor: '#8DBEC8',
                        // 6
                        data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ]
                    },
                    {
                        label: 'FTD',
                        backgroundColor: '#F29E4E',
                        borderColor: '#F29E4E',
                        data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ]
                    },
                    {
                        label: 'Earned',
                        backgroundColor: '#71B374',
                        borderColor: '#71B374',
                        data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                        // 7
                        hidden: true
                    }
                ]
            }
        })
    },

    activePages: function () {
        const links = document.querySelectorAll('.side-nav__item');

        for (let link of links) {
          
            link.addEventListener('click', function() {

                for (let link of links) {
                    link.classList.remove('side-nav__item-active');
                }

                this.classList.add('side-nav__item-active');

                const pageId= this.id;
                const pageClassName = pageId.replace('','.')
                
                const activePages = document.querySelectorAll('.active');

                for (let activePage of activePages) {
                    activePage.classList.remove('active');
                }

                document.querySelector(pageClassName).classList.toggle('active');
            })
        }

    },



    init: function() {
        const thisApp = this;
        
        thisApp.toogleMenu();
        thisApp.activePages();
        thisApp.showChart();
    },

}

app.init();
