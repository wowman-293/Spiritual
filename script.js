function calculateDiagnosis() {
    let patientName = document.getElementById("patientName").value;
    let motherName = document.getElementById("motherName").value;
    let dayValue = parseInt(document.getElementById("daySelect").value);
    let timeValue = document.querySelector('input[name="time"]:checked').value;

    let totalValue = patientName.length + motherName.length + dayValue + parseInt(timeValue) + 1100;
    let remainder = totalValue % 25;

    let diagnosis = [
        "جادو کا اثر موجود ہے۔",
        "معاشی مسائل ہیں۔",
        "جنات کی موجودگی ہے۔",
        "بندش کی علامات ہیں۔",
        "روحانی علاج کی ضرورت ہے۔"
    ];

    document.getElementById("resultText").innerText = diagnosis[remainder % diagnosis.length];
}
