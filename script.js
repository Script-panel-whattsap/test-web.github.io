const questions = [
    {
        question: "Apa nama kerajaan Hindu-Buddha terbesar di Indonesia?",
        options: ["Sriwijaya", "Majapahit", "Tarumanegara", "Kutai"],
        answer: 1
    },
    {
        question: "Siapakah tokoh proklamasi kemerdekaan Indonesia?",
        options: ["Soekarno", "Hatta", "Sudirman", "Sjahrir"],
        answer: 0
    },
    {
        question: "Peristiwa Sumpah Pemuda terjadi pada tahun berapa?",
        options: ["1925", "1926", "1927", "1928"],
        answer: 3
    },
    {
        question: "Siapa tokoh utama dalam pertempuran Surabaya 1945?",
        options: ["Sudirman", "Bung Tomo", "Soekarno", "Hatta"],
        answer: 1
    }
    // Tambahkan lebih banyak pertanyaan di sini hingga 1000
];

function startGame(mode) {
    let score = 0;
    let totalQuestions = questions.length;

    alert('Anda memilih mode: ' + mode + '\\nPermainan dimulai!');

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const userAnswer = prompt(
            q.question + "\\n" +
            q.options.map((opt, index) => `${index + 1}. ${opt}`).join("\\n")
        );

        if (parseInt(userAnswer) - 1 === q.answer) {
            score++;
            alert('Benar!');
        } else {
            alert('Salah! Jawaban yang benar adalah: ' + q.options[q.answer]);
        }
    }

    alert(`Permainan selesai! Skor Anda: ${score}/${totalQuestions}`);
}
