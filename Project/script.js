document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventList = document.querySelector('.list');
    const clearAllBtn = document.getElementById('clear-all');
    const addSampleBtn = document.getElementById('add-sample');

   
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        
        const title = document.getElementById('eventtitle').value;
        const date = document.getElementById('eventdate').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="delete-card-btn">×</span>
            <h3>${title}</h3>
            <p>📅 ${date}</p>
            <span class="category-badge">${category}</span>
            <p>${description}</p>
        `;

        
        card.querySelector('.delete-card-btn').addEventListener('click', () => {
            card.remove();
        });

        eventList.appendChild(card);
        eventForm.reset(); 
    });


    clearAllBtn.addEventListener('click', () => {
        if (confirm("Delete all events?")) {
            eventList.innerHTML = '';
        }
    });

    addSampleBtn.addEventListener('click', () => {
        const sampleEvents = [
            { title: "Tech Workshop", date: "2026-03-15", category: "Workshop", desc: "Learning modern CSS." },
            { title: "Networking Gala", date: "2026-04-20", category: "Social", desc: "Meet and greet experts." }
        ];

        sampleEvents.forEach(ev => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="delete-card-btn">×</span>
                <h3>${ev.title}</h3>
                <p>📅 ${ev.date}</p>
                <span class="category-badge">${ev.category}</span>
                <p>${ev.desc}</p>
            `;
            
           
            card.querySelector('.delete-card-btn').addEventListener('click', () => card.remove());
            
            document.querySelector('.list').appendChild(card);
        });
    });
});