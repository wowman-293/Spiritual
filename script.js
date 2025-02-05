function calculateDiagnosis() {
    let patientName = document.getElementById("patientName").value.trim();
    let motherName = document.getElementById("motherName").value.trim();
    let dayValue = parseInt(document.getElementById("daySelect").value);
    let timeValue = parseInt(document.querySelector('input[name="time"]:checked').value);

    // اگر نام یا والدہ کا نام درج نہ کیا جائے تو الرٹ شو کریں
    if (patientName === "" || motherName === "") {
        alert("براہ کرم مریض اور والدہ کا نام درج کریں!");
        return;
    }

    let totalValue = patientName.length + motherName.length + dayValue + timeValue + 1100;
    let remainder = totalValue % 25;

    let diagnosis = [
        "جادو کا اثر موجود ہے۔",
        "معاشی مسائل ہیں۔",
        "جنات کی موجودگی ہے۔",
        "بندش کی علامات ہیں۔",
        "روحانی علاج کی ضرورت ہے۔"
    ];

    let result = diagnosis[remainder % diagnosis.length] || "کوئی مسئلہ نظر نہیں آ رہا۔";

    document.getElementById("resultText").innerText = result;
}
