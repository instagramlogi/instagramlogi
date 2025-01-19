function updateForm() {
    const tournamentType = document.getElementById('tournament-type').value;
    const playerDetailsDiv = document.getElementById('player-details');
    playerDetailsDiv.innerHTML = ''; // Clear previous inputs

    if (tournamentType === 'SOLO') {
        playerDetailsDiv.innerHTML = `
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" required>
            <label for="whatsapp-number">WhatsApp Number:</label>
            <input type="text" id="whatsapp-number" name="whatsapp-number" required>
            <label for="instagram-id">Instagram ID:</label>
            <input type="text" id="instagram-id" name="instagram-id" required>
            <label for="gaming-uid">Gaming UID:</label>
            <input type="number" id="gaming-uid" name="gaming-uid" required>
            <label for="team-name">Team Name:</label>
            <input type="text" id="team-name" name="team-name" required>
        `;
    } else if (tournamentType === 'DUO') {
        playerDetailsDiv.innerHTML = `
            <label for="player1-name">Your Name:</label>
            <input type="text" id="player1-name" name="player1-name" required>
            <label for="partner-name">Your Duo Partner's Name:</label>
            <input type="text" id="partner-name" name="partner-name" required>
            <label for="whatsapp-number">WhatsApp Number:</label>
            <input type="text" id="whatsapp-number" name="whatsapp-number" required>
            <label for="instagram-id">Instagram ID:</label>
            <input type="text" id="instagram-id" name="instagram-id" required>
            <label for="gaming-uid">Your UID:</label>
            <input type="number" id="gaming-uid" name="gaming-uid" required>
            <label for="partner-uid">Partner's UID:</label>
            <input type="number" id="partner-uid" name="partner-uid" required>
            <label for="team-name">Team Name:</label>
            <input type="text" id="team-name" name="team-name" required>
        `;
    } else if (tournamentType === 'SQUAD' || tournamentType === 'CS_MATCH') {
        playerDetailsDiv.innerHTML = `
            <label for="player1-name">Player 1 Name:</label>
            <input type="text" id="player1-name" name="player1-name" required>
            <label for="player1-whatsapp">Player 1 WhatsApp:</label>
            <input type="text" id="player1-whatsapp" name="player1-whatsapp" required>
            <label for="player1-instagram">Player 1 Instagram ID:</label>
            <input type="text" id="player1-instagram" name="player1-instagram" required>
            <label for="player1-uid">Player 1 UID:</label>
            <input type="number" id="player1-uid" name="player1-uid" required>

            <label for="player2-name">Player 2 Name:</label>
            <input type="text" id="player2-name" name="player2-name" required>
            <label for="player2-whatsapp">Player 2 WhatsApp:</label>
            <input type="text" id="player2-whatsapp" name="player2-whatsapp" required>
            <label for="player2-instagram">Player 2 Instagram ID:</label>
            <input type="text" id="player2-instagram" name="player2-instagram" required>
            <label for="player2-uid">Player 2 UID:</label>
            <input type="number" id="player2-uid" name="player2-uid" required>

            <label for="player3-name">Player 3 Name:</label>
            <input type="text" id="player3-name" name="player3-name" required>
            <label for="player3-whatsapp">Player 3 WhatsApp:</label>
            <input type="text" id="player3-whatsapp" name="player3-whatsapp" required>
            <label for="player3-instagram">Player 3 Instagram ID:</label>
            <input type="text" id="player3-instagram" name="player3-instagram" required>
            <label for="player3-uid">Player 3 UID:</label>
            <input type="number" id="player3-uid" name="player3-uid" required>

            <label for="player4-name">Player 4 Name:</label>
            <input type="text" id="player4-name" name="player4-name" required>
            <label for="player4-whatsapp">Player 4 WhatsApp:</label>
            <input type="text" id="player4-whatsapp" name="player4-whatsapp" required>
            <label for="player4-instagram">Player 4 Instagram ID:</label>
            <input type="text" id="player4-instagram" name="player4-instagram" required>
            <label for="player4-uid">Player 4 UID:</label>
            <input type="number" id="player4-uid" name="player4-uid" required>

            <label for="team-name">Team Name:</label>
            <input type="text" id="team-name" name="team-name" required>
        `;
    }
}
