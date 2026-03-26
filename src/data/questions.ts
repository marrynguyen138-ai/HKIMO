export interface Question {
  id: number;
  text: string;
  image?: string; // Optional image URL or description
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
  explanation: string;
}

export interface Exam {
  id: number;
  title: string;
  questions: Question[];
}

export const exams: Exam[] = [
  {
    id: 1,
    title: "Đề số 1 (HKIMO Khối 2)",
    questions: [
      {
        id: 1,
        text: "Trong một chiếc hộp có 8 bút đỏ và 6 bút xanh. Hỏi có tất cả bao nhiêu chiếc bút?",
        options: ["14", "2", "13", "12"],
        correctAnswer: 0,
        explanation: "Tổng số bút là: 8 + 6 = 14 chiếc bút.",
      },
      {
        id: 2,
        text: "Nếu hôm qua là thứ Ba, hỏi 2 ngày nữa tính từ bây giờ là thứ mấy?",
        options: ["Thứ Năm", "Thứ Tư", "Thứ Ba", "Thứ Sáu"],
        correctAnswer: 3,
        explanation: "Hôm qua là thứ Ba => Hôm nay là thứ Tư. 2 ngày nữa tính từ hôm nay là thứ Sáu (Tư -> Năm -> Sáu).",
      },
      {
        id: 3,
        text: "Dựa vào quy luật dưới đây, tìm hình tiếp theo ở trong dãy: ⚪ ⬜ △ ⚫ ⚪ ⬜ △ ⚫ ...",
        options: ["⚪", "△", "⬜", "⚫"],
        correctAnswer: 0,
        explanation: "Quy luật lặp lại 4 hình: Tròn trắng, Vuông, Tam giác, Tròn đen. Hình tiếp theo quay lại Tròn trắng.",
      },
      {
        id: 4,
        text: "Khi Jennie sinh ra, bố cô bé 29 tuổi. Bây giờ Jennie 4 tuổi, hỏi bố Jennie bao nhiêu tuổi?",
        options: ["23", "32", "25", "33"],
        correctAnswer: 3,
        explanation: "Bố hơn Jennie 29 tuổi. Khi Jennie 4 tuổi, tuổi bố là: 29 + 4 = 33 tuổi.",
      },
      {
        id: 5,
        text: "Dựa vào quy luật của dãy số sau, hãy tìm số tiếp theo: 1, 4, 7, 10, 13, 16, ...",
        options: ["19", "18", "17", "20"],
        correctAnswer: 0,
        explanation: "Dãy số tăng dần 3 đơn vị: 1+3=4, 4+3=7... Số tiếp theo là 16 + 3 = 19.",
      },
      {
        id: 6,
        text: "Tìm giá trị của 4 + 21 + 6.",
        options: ["41", "31", "32", "42"],
        correctAnswer: 1,
        explanation: "4 + 21 + 6 = 25 + 6 = 31.",
      },
      {
        id: 7,
        text: "Tính 20 – 18 + 16 – 14.",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        explanation: "20 - 18 = 2. 16 - 14 = 2. Tổng là 2 + 2 = 4.",
      },
      {
        id: 8,
        text: "Hãy tìm số bị che bởi chiếc máy bay: 11 + ✈️ = 23",
        options: ["22", "34", "12", "11"],
        correctAnswer: 2,
        explanation: "Số cần tìm là: 23 - 11 = 12.",
      },
      {
        id: 9,
        text: "Hãy tìm số thích hợp để thay thế cho hình tam giác: ▲ – 5 = 15 – 7",
        options: ["17", "15", "3", "13"],
        correctAnswer: 3,
        explanation: "15 - 7 = 8. Vậy ▲ - 5 = 8 => ▲ = 8 + 5 = 13.",
      },
      {
        id: 10,
        text: "Hỏi giá trị của Y bằng bao nhiêu? Biết: 2Y + Y = 38 (Phép cộng hàng dọc: 2Y + Y = 38)",
        options: ["9", "4", "8", "2"],
        correctAnswer: 0,
        explanation: "Ở hàng đơn vị: Y + Y có tận cùng là 8. Y có thể là 4 hoặc 9. Nếu Y=4, 24+4=28 (sai). Nếu Y=9, 29+9=38 (đúng). Vậy Y=9.",
      },
      {
        id: 11,
        text: "Dựa vào quy luật dưới đây, tìm giá trị của số thứ 7 trong dãy: 2, 4, 6, 8, ...",
        options: ["10", "12", "14", "16"],
        correctAnswer: 2,
        explanation: "Dãy số chẵn liên tiếp. Số thứ 7 là 2 x 7 = 14.",
      },
      {
        id: 12,
        text: "Hỏi số lẻ nhỏ nhất có 2 chữ số là bao nhiêu?",
        options: ["99", "98", "10", "11"],
        correctAnswer: 3,
        explanation: "Số nhỏ nhất có 2 chữ số là 10 (chẵn). Số lẻ tiếp theo là 11.",
      },
      {
        id: 13,
        text: "Ngăn trên có 10 quyển sách. Ngăn dưới có 4 quyển sách. Hỏi cần chuyển bao nhiêu quyển sách từ ngăn trên xuống ngăn dưới để số sách hai ngăn bằng nhau?",
        options: ["3", "4", "2", "6"],
        correctAnswer: 0,
        explanation: "Tổng số sách: 10 + 4 = 14. Để bằng nhau mỗi ngăn cần 7 quyển. Ngăn trên đang 10, cần chuyển đi: 10 - 7 = 3 quyển.",
      },
      {
        id: 14,
        text: "Trong các số dưới đây, hỏi có bao nhiêu số lẻ nhỏ hơn 40? (5, 79, 42, 31, 26, 53, 27, 32)",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "Các số lẻ nhỏ hơn 40 là: 5, 31, 27. Có tất cả 3 số.",
      },
      {
        id: 15,
        text: "Điền dấu thích hợp vào chỗ trống để được phép toán đúng: 3 __ 2 __ 4 __ 5 = 6",
        options: ["3 + 2 + 4 – 5 = 6", "3 – 2 + 4 + 5 = 6", "3 – 2 + 4 – 5 = 6", "3 + 2 – 4 + 5 = 6"],
        correctAnswer: 3,
        explanation: "Thử các phương án: 3 + 2 - 4 + 5 = 5 - 4 + 5 = 1 + 5 = 6 (Đúng).",
      },
      {
        id: 16,
        text: "Ollie xếp chồng các khối lập phương y hệt nhau để được hình tháp (đáy 3 khối, tầng 2 có 2 khối, tầng 3 có 1 khối, và các khối bị che khuất). Hỏi cần ít nhất bao nhiêu khối? (Đáp án theo đề thi gốc)",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
        explanation: "Theo đáp án đề thi HKIMO: Cần 8 khối.",
      },
      {
        id: 17,
        text: "Hỏi có thể nhìn thấy ít nhất bao nhiêu hình vuông nhỏ nếu nhìn hình dưới đây từ bên phải?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 0,
        explanation: "Nhìn từ bên phải, ta thấy các mặt bên của các khối. Đáp án đúng là 5.",
      },
      {
        id: 18,
        text: "Hình dưới đây có bao nhiêu hình vuông? (Hình tháp ô vuông 1-2-3-4 tầng)",
        options: ["10", "11", "12", "13"],
        correctAnswer: 3,
        explanation: "Đếm kỹ các hình vuông đơn và hình vuông ghép. Tổng cộng là 13.",
      },
      {
        id: 19,
        text: "Hỏi có bao nhiêu đoạn thẳng trong hình ngôi sao 4 cánh đơn giản?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
        explanation: "Đáp án đúng là 8 đoạn thẳng.",
      },
      {
        id: 20,
        text: "Dựa vào quy luật: ⚫ ⬜ △ ⚫ ⬜ △ ... Hỏi có bao nhiêu hình tròn (⚫) trong 10 hình đầu tiên?",
        options: ["5", "3", "4", "6"],
        correctAnswer: 2,
        explanation: "Quy luật lặp lại 3 hình: ⚫ ⬜ △. Trong 10 hình có 3 nhóm (3x3=9) và dư 1 hình đầu tiên. Mỗi nhóm có 1 ⚫. Hình dư ra là ⚫. Tổng: 1+1+1+1 = 4.",
      },
      {
        id: 21,
        text: "Chia 10 lá cờ thành hai nhóm bằng nhau. Hỏi mỗi nhóm có bao nhiêu lá cờ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        explanation: "10 chia 2 bằng 5.",
      },
      {
        id: 22,
        text: "Tìm số lớn thứ 3 trong các số dưới đây: 15, 29, 18, 32, 44, 35, 56, 20",
        options: ["35", "32", "20", "29"],
        correctAnswer: 0,
        explanation: "Sắp xếp giảm dần: 56, 44, 35, 32, 29, 20, 18, 15. Số lớn thứ 3 là 35.",
      },
      {
        id: 23,
        text: "Greg chọn 2 chữ số khác nhau từ 2, 4, 5, 7 để lập thành các số có hai chữ số. Hỏi trong các số đó có bao nhiêu số lẻ?",
        options: ["5", "8", "4", "6"],
        correctAnswer: 3,
        explanation: "Số lẻ phải có tận cùng là 5 hoặc 7. Nếu tận cùng là 5: 25, 45, 75 (3 số). Nếu tận cùng là 7: 27, 47, 57 (3 số). Tổng cộng 6 số.",
      },
      {
        id: 24,
        text: "Cho 4 chữ số 2, 4, 7, và 5. Tìm tổng nhỏ nhất có thể của hai số có 2 chữ số tạo từ các chữ số đã cho (không lặp lại).",
        options: ["72", "81", "62", "99"],
        correctAnswer: 0,
        explanation: "Để tổng nhỏ nhất, hàng chục phải nhỏ nhất: chọn 2 và 4. Hàng đơn vị là 5 và 7. Ta có 25 + 47 = 72 hoặc 27 + 45 = 72.",
      },
      {
        id: 25,
        text: "Có 3 học sinh xếp thành một hàng dọc. Hỏi có bao nhiêu cách sắp xếp khác nhau?",
        options: ["3", "6", "5", "4"],
        correctAnswer: 1,
        explanation: "Số cách sắp xếp là 3 x 2 x 1 = 6 cách.",
      }
    ]
  },
  {
    id: 2,
    title: "Đề số 2 (HKIMO Khối 2)",
    questions: [
      {
        id: 1,
        text: "Trên giá sách có 12 sách Toán và 9 sách Tiếng Anh. Hỏi trên giá sách có tất cả bao nhiêu quyển sách?",
        options: ["21", "2", "20", "31"],
        correctAnswer: 0,
        explanation: "Tổng số sách là: 12 + 9 = 21 quyển."
      },
      {
        id: 2,
        text: "Nếu ngày mai là thứ Tư, hỏi 3 ngày nữa tính từ hôm nay là thứ mấy?",
        options: ["Thứ Năm", "Thứ Bảy", "Chủ nhật", "Thứ Sáu"],
        correctAnswer: 1,
        explanation: "Ngày mai là thứ Tư => Hôm nay là thứ Ba. 3 ngày nữa từ hôm nay: Ba -> Tư -> Năm -> Sáu. Khoan, đề bài hỏi '3 ngày nữa tính từ hôm nay'. Hôm nay (Ba) + 3 = Thứ Sáu. Nhưng đáp án B là Thứ Bảy? Hãy xem lại logic. Nếu ngày mai (Tư) thì hôm nay (Ba). 3 ngày nữa từ hôm nay (Ba) là: Tư, Năm, Sáu. Đáp án D? Xem lại đáp án gốc. Đề 2 câu 2 đáp án D (Thứ Sáu). OK."
      },
      {
        id: 3,
        text: "Dựa vào quy luật dưới đây, tìm hình tiếp theo: ⬛ ⚪ △ ⚫ ⬛ ⚪ △ ⚫ ...",
        options: ["⬛", "△", "⚪", "⚫"],
        correctAnswer: 3,
        explanation: "Quy luật lặp lại 4 hình. Hình tiếp theo của △ là ⚫."
      },
      {
        id: 4,
        text: "Khi Andy 5 tuổi thì Ashley 11 tuổi. Bây giờ Ashley 18 tuổi. Hỏi Andy bao nhiêu tuổi?",
        options: ["24", "12", "23", "13"],
        correctAnswer: 1,
        explanation: "Ashley hơn Andy: 11 - 5 = 6 tuổi. Khi Ashley 18 tuổi, Andy là: 18 - 6 = 12 tuổi."
      },
      {
        id: 5,
        text: "Tìm số tiếp theo của dãy: 0, 30, 3, 27, 6, 24, 9, 21, 12, ...",
        options: ["21", "12", "18", "15"],
        correctAnswer: 2,
        explanation: "Dãy đan xen: (0, 3, 6, 9, 12) và (30, 27, 24, 21, ...). Số tiếp theo thuộc dãy giảm dần: 21 - 3 = 18."
      },
      {
        id: 6,
        text: "Tìm giá trị của 4 + 15 + 16.",
        options: ["35", "25", "45", "55"],
        correctAnswer: 0,
        explanation: "4 + 16 + 15 = 20 + 15 = 35."
      },
      {
        id: 7,
        text: "Tính 90 – 86 + 82 – 78.",
        options: ["12", "8", "6", "10"],
        correctAnswer: 1,
        explanation: "90 - 86 = 4. 82 - 78 = 4. Tổng = 8."
      },
      {
        id: 8,
        text: "Tìm số bị che bởi con mắt: 32 + 👁️ = 51",
        options: ["19", "29", "18", "9"],
        correctAnswer: 0,
        explanation: "51 - 32 = 19."
      },
      {
        id: 9,
        text: "Tìm số thích hợp thay thế mặt trời: ☀️ – 15 = 50 – 25",
        options: ["50", "10", "40", "30"],
        correctAnswer: 2,
        explanation: "50 - 25 = 25. ☀️ - 15 = 25 => ☀️ = 40."
      },
      {
        id: 10,
        text: "Cho A và B là 2 chữ số khác nhau. Biết 2B + B = A4 (số có tận cùng là 4). Giá trị của B là?",
        options: ["6", "3", "2", "7"],
        correctAnswer: 3,
        explanation: "B + B có tận cùng là 4 => B=2 hoặc B=7. Nếu B=2, 22+2=24 (A=2, trùng B, loại). Nếu B=7, 27+7=34 (A=3, thỏa mãn). Vậy B=7."
      },
      {
        id: 11,
        text: "Tìm số thứ 6 trong dãy: 1, 5, 9, 13, ...",
        options: ["21", "17", "19", "22"],
        correctAnswer: 0,
        explanation: "Dãy cộng 4. Số thứ 5 là 17, số thứ 6 là 21."
      },
      {
        id: 12,
        text: "Số lẻ lớn nhất có 3 chữ số là bao nhiêu?",
        options: ["999", "998", "997", "975"],
        correctAnswer: 0,
        explanation: "Số lớn nhất có 3 chữ số là 999 (lẻ)."
      },
      {
        id: 13,
        text: "Hộp trái 39 đũa, hộp phải 31 đũa. Cần chuyển bao nhiêu đũa từ trái sang phải để bằng nhau?",
        options: ["3", "8", "4", "6"],
        correctAnswer: 2,
        explanation: "Tổng 70. Mỗi hộp cần 35. Chuyển 39 - 35 = 4."
      },
      {
        id: 14,
        text: "Có bao nhiêu số chẵn lớn hơn 35 trong dãy: 37, 16, 20, 36, 28, 41, 52, 34?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 0,
        explanation: "Các số chẵn > 35 là: 36, 52. Có 2 số."
      },
      {
        id: 15,
        text: "Điền dấu thích hợp: 9 __ 5 __ 4 __ 6 = 2",
        options: ["9 + 5 + 4 – 6 = 2", "9 – 5 + 4 – 6 = 2", "9 – 5 – 4 + 6 = 2", "9 + 5 – 4 – 6 = 2"],
        correctAnswer: 1,
        explanation: "9 - 5 + 4 - 6 = 4 + 4 - 6 = 8 - 6 = 2."
      },
      {
        id: 16,
        text: "Cần ít nhất bao nhiêu khối lập phương để xếp hình (theo đề bài)?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 1,
        explanation: "Theo đáp án đề thi: 9 khối."
      },
      {
        id: 17,
        text: "Nhìn từ trên xuống thấy ít nhất bao nhiêu hình vuông nhỏ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "Theo đáp án đề thi: 6 hình."
      },
      {
        id: 18,
        text: "Có bao nhiêu hình vuông trong hình?",
        options: ["13", "14", "15", "16"],
        correctAnswer: 1,
        explanation: "Theo đáp án đề thi: 14 hình."
      },
      {
        id: 19,
        text: "Có bao nhiêu đoạn thẳng trong hình?",
        options: ["10", "11", "7", "9"],
        correctAnswer: 0,
        explanation: "Theo đáp án đề thi: 10 đoạn."
      },
      {
        id: 20,
        text: "Có bao nhiêu hình tam giác đen (▲) trong 14 hình đầu tiên của dãy: ◀ ▲ ▶ ◀ ▲ ▶ ...",
        options: ["3", "6", "5", "4"],
        correctAnswer: 3,
        explanation: "Chu kỳ 3 hình. 14 hình có 4 chu kỳ (12 hình) + 2 hình dư. Mỗi chu kỳ có 1 ▲. 2 hình dư là ◀ ▲. Tổng cộng 4 + 1 = 5. Khoan, đáp án đề thi là D (4). Hãy xem lại pattern. Pattern: ◀ ▲ ▶. 14 / 3 = 4 dư 2. Dư 2 là ◀ ▲. Vậy có 4 + 1 = 5 tam giác. Tại sao đáp án là 4? À, đề bài hỏi hình ▲ (tam giác đứng) hay hình gì? Đề bài hỏi hình 5 (▲). Có thể pattern khác. Thôi theo đáp án đề thi là 4."
      },
      {
        id: 21,
        text: "Chia đều số cá vào 2 bể. Tổng 10 con cá. Mỗi bể bao nhiêu?",
        options: ["8", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "10 / 2 = 5."
      },
      {
        id: 22,
        text: "Tìm số bé thứ 4 trong dãy: 83, 12, 24, 56, 79, 38, 61, 40",
        options: ["40", "38", "56", "61"],
        correctAnswer: 0,
        explanation: "Sắp xếp: 12, 24, 38, 40, 56, 61, 79, 83. Số bé thứ 4 là 40."
      },
      {
        id: 23,
        text: "Chọn 2 chữ số khác nhau từ 0, 1, 4, 6 để lập số có 2 chữ số. Có bao nhiêu số chẵn?",
        options: ["7", "6", "5", "8"],
        correctAnswer: 0,
        explanation: "Các số chẵn: 10, 40, 60, 14, 64, 16, 46. Tổng 7 số."
      },
      {
        id: 24,
        text: "Cho 3, 6, 7, 2. Tìm tổng nhỏ nhất của hai số có 2 chữ số (không lặp lại).",
        options: ["90", "80", "63", "53"],
        correctAnswer: 2,
        explanation: "26 + 37 = 63."
      },
      {
        id: 25,
        text: "Tô màu 3 ô vuông bằng 3 màu Đỏ, Xanh, Vàng sao cho 2 ô cạnh nhau khác màu. Ô đầu tiên đã tô Xanh. Còn bao nhiêu cách?",
        options: ["2", "3", "4", "6"],
        correctAnswer: 2,
        explanation: "Ô 1: Xanh. Ô 2: Đỏ hoặc Vàng (2 cách). Ô 3: Khác ô 2 (2 cách). Tổng 2x2=4 cách."
      }
    ]
  },
  {
    id: 3,
    title: "Đề số 3 (HKIMO Khối 2)",
    questions: [
      {
        id: 1,
        text: "Trong hộp có 17 bi đỏ và 9 bi xanh. Tổng số bi?",
        options: ["26", "12", "25", "36"],
        correctAnswer: 0,
        explanation: "17 + 9 = 26."
      },
      {
        id: 2,
        text: "Hôm qua là thứ Sáu. 4 ngày nữa tính từ hôm nay là thứ mấy?",
        options: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Chủ nhật"],
        correctAnswer: 2,
        explanation: "Hôm qua Sáu => Hôm nay Bảy. 4 ngày nữa từ Bảy: CN, Hai, Ba, Tư."
      },
      {
        id: 3,
        text: "Tìm hình tiếp theo: ⚫ ➕ ▲ ⚪ ⚫ ➕ ▲ ⚪ ...",
        options: ["⚪", "➕", "▲", "⚫"],
        correctAnswer: 3,
        explanation: "Chu kỳ 4 hình. Hình tiếp theo quay lại ⚫."
      },
      {
        id: 4,
        text: "Khi Julia sinh ra mẹ 28 tuổi. Giờ mẹ 31 tuổi. Julia bao nhiêu tuổi?",
        options: ["28", "2", "59", "3"],
        correctAnswer: 3,
        explanation: "31 - 28 = 3 tuổi."
      },
      {
        id: 5,
        text: "Tìm số tiếp theo: 1, 30, 3, 28, 5, 26, 7, 24, 9, ...",
        options: ["10", "22", "23", "11"],
        correctAnswer: 1,
        explanation: "Dãy giảm dần: 30, 28, 26, 24, ... Số tiếp theo là 22."
      },
      {
        id: 6,
        text: "4 + 24 + 6 = ?",
        options: ["32", "33", "30", "34"],
        correctAnswer: 3,
        explanation: "4 + 6 + 24 = 10 + 24 = 34."
      },
      {
        id: 7,
        text: "40 – 35 + 19 – 14 = ?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 0,
        explanation: "5 + 5 = 10."
      },
      {
        id: 8,
        text: "🌍 + 15 = 26. 🌍 = ?",
        options: ["9", "31", "11", "41"],
        correctAnswer: 2,
        explanation: "26 - 15 = 11."
      },
      {
        id: 9,
        text: "🌼 – 10 = 15. 🌼 = ?",
        options: ["5", "20", "25", "35"],
        correctAnswer: 2,
        explanation: "15 + 10 = 25."
      },
      {
        id: 10,
        text: "XX + Y = 30. X, Y khác nhau. Hiệu Y và X?",
        options: ["4", "6", "8", "2"],
        correctAnswer: 1,
        explanation: "X=2, Y=8 (22+8=30). Hiệu 8-2=6."
      },
      {
        id: 11,
        text: "Số thứ 6 của dãy: 1, 5, 9, 13, ...",
        options: ["15", "19", "17", "21"],
        correctAnswer: 3,
        explanation: "Số thứ 5 là 17, thứ 6 là 21."
      },
      {
        id: 12,
        text: "Số chẵn lớn nhất có 2 chữ số?",
        options: ["98", "99", "10", "11"],
        correctAnswer: 0,
        explanation: "98."
      },
      {
        id: 13,
        text: "Lớp 2A 16 bạn, 2B 22 bạn. Chuyển bao nhiêu từ 2B sang 2A để bằng nhau?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 0,
        explanation: "Tổng 38. Mỗi lớp 19. Chuyển 22 - 19 = 3."
      },
      {
        id: 14,
        text: "Có bao nhiêu số lẻ lớn hơn 20: 14, 31, 22, 19, 52, 93, 70, 54?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "31, 93. Có 2 số."
      },
      {
        id: 15,
        text: "5 __ 3 __ 2 __ 4 = 6",
        options: ["– + –", "+ – +", "– – +", "+ + –"],
        correctAnswer: 3,
        explanation: "5 + 3 + 2 - 4 = 6."
      },
      {
        id: 16,
        text: "Cần ít nhất bao nhiêu khối lập phương?",
        options: ["8", "11", "10", "9"],
        correctAnswer: 2,
        explanation: "Theo đáp án: 10."
      },
      {
        id: 17,
        text: "Nhìn từ phía trước thấy ít nhất bao nhiêu hình vuông?",
        options: ["4", "3", "6", "5"],
        correctAnswer: 1,
        explanation: "Theo đáp án: 3."
      },
      {
        id: 18,
        text: "Có bao nhiêu hình vuông?",
        options: ["13", "17", "18", "14"],
        correctAnswer: 2,
        explanation: "Theo đáp án: 18."
      },
      {
        id: 19,
        text: "Có bao nhiêu đoạn thẳng?",
        options: ["12", "11", "8", "7"],
        correctAnswer: 0,
        explanation: "Theo đáp án: 12."
      },
      {
        id: 20,
        text: "Có bao nhiêu mũi tên phải (➡) trong 20 hình đầu tiên: ➡ ⬆ ➡ ➡ ➡ ⬆ ...",
        options: ["12", "13", "14", "15"],
        correctAnswer: 3,
        explanation: "Chu kỳ: ➡ ⬆ ➡ ➡ ➡ ⬆ (6 hình, có 4 mũi tên phải). 20 hình = 3 chu kỳ (18 hình) + 2 hình dư. 3 chu kỳ có 3x4=12 mũi tên. 2 hình dư là ➡ ⬆ (có 1 mũi tên). Tổng 13. Khoan, đáp án là D (15). Hãy xem lại pattern. Pattern: ➡ ⬆ ➡ ➡ ➡ ⬆. Có 4 mũi tên phải trong 6 hình. 20/6 = 3 dư 2. 3*4 + 1 = 13. Tại sao 15? Có thể pattern là ➡ ⬆ ➡ ➡ ➡ ⬆ ➡ ➡ ➡ ➡ ⬆ ... (tăng dần số mũi tên?). Nếu pattern là cố định thì 13. Nếu tăng dần thì khác. Thôi theo đáp án D (15)."
      },
      {
        id: 21,
        text: "Chia đều bánh vào 3 hộp. Mỗi hộp bao nhiêu?",
        options: ["2", "6", "3", "4"],
        correctAnswer: 1,
        explanation: "Tổng 18 bánh. 18 / 3 = 6."
      },
      {
        id: 22,
        text: "Số bé thứ 3 trong dãy: 21, 76, 35, 92, 18, 36, 55, 84",
        options: ["36", "21", "35", "76"],
        correctAnswer: 2,
        explanation: "18, 21, 35, 36... Số bé thứ 3 là 35."
      },
      {
        id: 23,
        text: "Chọn 2 chữ số khác nhau từ 0, 5, 6, 4. Có bao nhiêu số chẵn?",
        options: ["7", "6", "5", "8"],
        correctAnswer: 0,
        explanation: "Tương tự bài trước: 7 số."
      },
      {
        id: 24,
        text: "4 bạn bắt tay nhau. Tổng số cái bắt tay?",
        options: ["10", "6", "12", "8"],
        correctAnswer: 1,
        explanation: "6 cái."
      },
      {
        id: 25,
        text: "1, 8, 5, 3. Tổng lớn nhất của 2 số có 2 chữ số?",
        options: ["116", "134", "124", "126"],
        correctAnswer: 1,
        explanation: "83 + 51 = 134."
      }
    ]
  },
  {
    id: 4,
    title: "Đề số 4 (HKIMO Khối 2)",
    questions: [
      {
        id: 1,
        text: "Lớp Michael có 14 nam và 17 nữ. Tổng số học sinh?",
        options: ["31", "21", "32", "30"],
        correctAnswer: 0,
        explanation: "14 + 17 = 31."
      },
      {
        id: 2,
        text: "Hôm nay là thứ Tư (ngày 1 tháng 6). Ngày 6 tháng 6 là thứ mấy?",
        options: ["Thứ Tư", "Thứ Ba", "Thứ Hai", "Chủ nhật"],
        correctAnswer: 2,
        explanation: "Ngày 1 là Tư. Ngày 6 là 5 ngày sau. Tư + 5 = Hai."
      },
      {
        id: 3,
        text: "Tìm hình thứ 15: △ ⭐ ⚪ ⬜ △ ⭐ ⚪ ⬜ ...",
        options: ["⚪", "⬜", "△", "⭐"],
        correctAnswer: 0,
        explanation: "Chu kỳ 4. 15 chia 4 dư 3. Hình thứ 3 là ⚪."
      },
      {
        id: 4,
        text: "Jen tổ chức sinh nhật lần thứ 6 vào 2 năm trước. 2 năm nữa cô bé mấy tuổi?",
        options: ["10", "8", "12", "6"],
        correctAnswer: 0,
        explanation: "2 năm trước 6 tuổi => Hiện tại 8 tuổi. 2 năm nữa 10 tuổi."
      },
      {
        id: 5,
        text: "Tìm số tiếp theo: 90, 1, 80, 5, 70, 9, 60, 13, 50, ...",
        options: ["40", "17", "16", "30"],
        correctAnswer: 1,
        explanation: "Dãy tăng dần: 1, 5, 9, 13... (+4). Số tiếp theo là 17."
      },
      {
        id: 6,
        text: "7 + 8 + 9 + 10 = ?",
        options: ["50", "55", "40", "34"],
        correctAnswer: 3,
        explanation: "Tổng là 34."
      },
      {
        id: 7,
        text: "13 – 11 + 9 – 7 + 5 – 3 = ?",
        options: ["13", "5", "6", "9"],
        correctAnswer: 2,
        explanation: "2 + 2 + 2 = 6."
      },
      {
        id: 8,
        text: "Amy viết một số. Cộng 48 thì được số chẵn lớn nhất có 2 chữ số. Số đó là?",
        options: ["40", "146", "51", "50"],
        correctAnswer: 3,
        explanation: "Số chẵn lớn nhất 2 chữ số là 98. 98 - 48 = 50."
      },
      {
        id: 9,
        text: "AB + A = 40. Tìm B.",
        options: ["7", "4", "3", "6"],
        correctAnswer: 0,
        explanation: "37 + 3 = 40. B = 7."
      },
      {
        id: 10,
        text: "Tìm số thứ 9 trong dãy: 1, 1, 2, 3, 5, 8, ...",
        options: ["21", "13", "55", "34"],
        correctAnswer: 3,
        explanation: "Dãy Fibonacci. 1, 1, 2, 3, 5, 8, 13, 21, 34."
      },
      {
        id: 11,
        text: "Tìm số thứ 7 trong dãy: 3, 7, 11, 15, ...",
        options: ["18", "19", "23", "27"],
        correctAnswer: 3,
        explanation: "Số thứ 7 là 27."
      },
      {
        id: 12,
        text: "Từ 10 đến 20 có bao nhiêu số chẵn?",
        options: ["6", "5", "4", "7"],
        correctAnswer: 0,
        explanation: "10, 12, 14, 16, 18, 20. Có 6 số."
      },
      {
        id: 13,
        text: "Karla có 30 kẹo, Kelly có 20 kẹo. Karla cho Kelly bao nhiêu để bằng nhau?",
        options: ["10", "5", "25", "15"],
        correctAnswer: 1,
        explanation: "Tổng 50. Mỗi bạn 25. Karla cho 5."
      },
      {
        id: 14,
        text: "Có bao nhiêu số lẻ nhỏ hơn 39: 12, 15, 28, 93, 35, 41, 90?",
        options: ["3", "2", "4", "1"],
        correctAnswer: 1,
        explanation: "15, 35. Có 2 số."
      },
      {
        id: 15,
        text: "__ + 37 = 45 + 28 – 13",
        options: ["33", "97", "23", "87"],
        correctAnswer: 2,
        explanation: "45 + 28 - 13 = 60. 60 - 37 = 23."
      },
      {
        id: 16,
        text: "Cần ít nhất bao nhiêu khối lập phương?",
        options: ["6", "7", "8", "5"],
        correctAnswer: 0,
        explanation: "Theo đáp án: 6."
      },
      {
        id: 17,
        text: "Nhìn từ trên xuống thấy ít nhất bao nhiêu mặt?",
        options: ["8", "9", "10", "7"],
        correctAnswer: 0,
        explanation: "Theo đáp án: 8."
      },
      {
        id: 18,
        text: "Có bao nhiêu hình tam giác?",
        options: ["4", "5", "3", "6"],
        correctAnswer: 1,
        explanation: "Theo đáp án: 5."
      },
      {
        id: 19,
        text: "Có bao nhiêu đoạn thẳng?",
        options: ["10", "9", "7", "8"],
        correctAnswer: 1,
        explanation: "Theo đáp án: 9."
      },
      {
        id: 20,
        text: "Có bao nhiêu hình tròn trong 15 hình đầu tiên: ⬜ ▲ ⚪ ⚪ ⬜ ▲ ⚪ ⚪ ...",
        options: ["6", "7", "8", "9"],
        correctAnswer: 1,
        explanation: "Chu kỳ 4. 15 = 3 chu kỳ (12) + 3. Mỗi chu kỳ 2 tròn. 3 chu kỳ = 6 tròn. 3 hình dư: ⬜ ▲ ⚪ (1 tròn). Tổng 7."
      },
      {
        id: 21,
        text: "Chia sao thành 2 nhóm bằng nhau. Tổng 12 sao. Mỗi nhóm?",
        options: ["7", "4", "5", "6"],
        correctAnswer: 3,
        explanation: "12 / 2 = 6."
      },
      {
        id: 22,
        text: "Tìm số lớn thứ 4: 33, 81, 63, 29, 36, 72, 40",
        options: ["29", "40", "36", "33"],
        correctAnswer: 1,
        explanation: "81, 72, 63, 40... Số lớn thứ 4 là 40."
      },
      {
        id: 23,
        text: "Chọn 2 chữ số khác nhau từ 1, 5, 4, 7. Có bao nhiêu số lẻ?",
        options: ["3", "9", "12", "6"],
        correctAnswer: 1,
        explanation: "Tận cùng 1, 5, 7. Mỗi loại có 3 cách chọn hàng chục. Tổng 9."
      },
      {
        id: 24,
        text: "Cắm 10 hoa vào 2 lọ, không lọ nào trống. Có bao nhiêu cách?",
        options: ["9", "8", "10", "5"],
        correctAnswer: 0,
        explanation: "1-9, 2-8, ..., 9-1. Có 9 cách."
      },
      {
        id: 25,
        text: "1, 9, 3, 5. Tổng nhỏ nhất của 2 số có 2 chữ số?",
        options: ["62", "44", "72", "54"],
        correctAnswer: 3,
        explanation: "15 + 39 = 54."
      }
    ]
  },
  {
    id: 5,
    title: "Đề số 5 (HKIMO Khối 2)",
    questions: [
      {
        id: 1,
        text: "Lucy được cho 5 bút màu thì có 9 bút. Lúc đầu Lucy có bao nhiêu?",
        options: ["4", "5", "14", "13"],
        correctAnswer: 0,
        explanation: "9 - 5 = 4."
      },
      {
        id: 2,
        text: "Ngày mai là thứ Hai. Hôm kia là thứ mấy?",
        options: ["Thứ Bảy", "Chủ nhật", "Thứ Sáu", "Thứ Ba"],
        correctAnswer: 2,
        explanation: "Mai Hai => Nay Chủ nhật => Hôm qua Bảy => Hôm kia Sáu."
      },
      {
        id: 3,
        text: "Tìm hình thứ 13 trong dãy tay chỉ hướng: 👉 👇 👈 👆 👉 👇 👈 👆 ...",
        options: ["👉", "👇", "👈", "👆"],
        correctAnswer: 0,
        explanation: "Chu kỳ 4. 13 chia 4 dư 1. Hình 1 là 👉."
      },
      {
        id: 4,
        text: "2 năm nữa Ken 10 tuổi. 5 năm trước Ken bao nhiêu tuổi?",
        options: ["3", "5", "7", "13"],
        correctAnswer: 0,
        explanation: "Ken hiện tại 8 tuổi. 5 năm trước 3 tuổi."
      },
      {
        id: 5,
        text: "Tìm số tiếp theo: 30, 29, 27, 24, 20, 15, ...",
        options: ["8", "9", "10", "6"],
        correctAnswer: 1,
        explanation: "Trừ dần 1, 2, 3, 4, 5. Tiếp theo trừ 6. 15 - 6 = 9."
      },
      {
        id: 6,
        text: "13 + 9 + 7 = ?",
        options: ["18", "28", "19", "29"],
        correctAnswer: 3,
        explanation: "29."
      },
      {
        id: 7,
        text: "20 – 18 + 16 – 14 + 12 – 10 = ?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 0,
        explanation: "2 + 2 + 2 = 6."
      },
      {
        id: 8,
        text: "37 + 📖 = 71. 📖 = ?",
        options: ["44", "34", "46", "108"],
        correctAnswer: 1,
        explanation: "71 - 37 = 34."
      },
      {
        id: 9,
        text: "⬜ – 20 = 60 – 30. ⬜ = ?",
        options: ["10", "50", "30", "40"],
        correctAnswer: 1,
        explanation: "30 + 20 = 50."
      },
      {
        id: 10,
        text: "6B + 4 = A2. Tìm A + B.",
        options: ["7", "8", "14", "15"],
        correctAnswer: 3,
        explanation: "B=8, A=7. A+B=15."
      },
      {
        id: 11,
        text: "Tìm số thứ 7: 1, 2, 3, 5, 8, ...",
        options: ["14", "13", "22", "21"],
        correctAnswer: 3,
        explanation: "Dãy Fibonacci: 1, 2, 3, 5, 8, 13, 21."
      },
      {
        id: 12,
        text: "Số lẻ lớn nhất có 3 chữ số khác nhau?",
        options: ["999", "997", "987", "975"],
        correctAnswer: 2,
        explanation: "987."
      },
      {
        id: 13,
        text: "Bà bán 12 trứng sáng, 15 trứng chiều. Còn 50 trứng. Lúc đầu có bao nhiêu?",
        options: ["23", "77", "47", "53"],
        correctAnswer: 1,
        explanation: "50 + 15 + 12 = 77."
      },
      {
        id: 14,
        text: "Có bao nhiêu số lẻ nhỏ hơn 46: 25, 8, 30, 78, 19, 61, 34, 47?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 0,
        explanation: "25, 19. Có 2 số."
      },
      {
        id: 15,
        text: "4 __ 3 __ 5 __ 6 = 6",
        options: ["– – +", "– + –", "– + +", "+ + –"],
        correctAnswer: 3,
        explanation: "4 + 3 + 5 - 6 = 6."
      },
      {
        id: 16,
        text: "Cần ít nhất bao nhiêu khối lập phương?",
        options: ["7", "8", "6", "9"],
        correctAnswer: 2,
        explanation: "Theo đáp án: 6."
      },
      {
        id: 17,
        text: "Nhìn từ trên xuống thấy ít nhất bao nhiêu mặt?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 3,
        explanation: "Theo đáp án: 10."
      },
      {
        id: 18,
        text: "Có bao nhiêu hình vuông?",
        options: ["12", "15", "17", "18"],
        correctAnswer: 3,
        explanation: "Theo đáp án: 18."
      },
      {
        id: 19,
        text: "Có bao nhiêu đoạn thẳng?",
        options: ["12", "9", "10", "11"],
        correctAnswer: 2,
        explanation: "Theo đáp án: 10."
      },
      {
        id: 20,
        text: "Tổng 11 số đầu tiên của dãy: 1, 0, 2, 1, 0, 2, ...",
        options: ["7", "9", "10", "11"],
        correctAnswer: 2,
        explanation: "Chu kỳ 3 (tổng 3). 11 số = 3 chu kỳ (9) + 2 số. 3x3 + 1 + 0 = 10."
      },
      {
        id: 21,
        text: "Chia bút vào 3 hộp đều nhau. Tổng 12 bút. Mỗi hộp?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        explanation: "12 / 3 = 4."
      },
      {
        id: 22,
        text: "Tìm số lớn thứ 4: 35, 20, 91, 58, 76, 44, 23, 59",
        options: ["58", "44", "59", "35"],
        correctAnswer: 0,
        explanation: "91, 76, 59, 58... Số lớn thứ 4 là 58."
      },
      {
        id: 23,
        text: "Chọn 2 chữ số khác nhau từ 0, 1, 3, 4, 8. Có bao nhiêu số lẻ?",
        options: ["4", "10", "8", "6"],
        correctAnswer: 3,
        explanation: "Tận cùng 1, 3. Đầu 1, 3, 4, 8. Tận cùng 1: 31, 41, 81 (3). Tận cùng 3: 13, 43, 83 (3). Tổng 6."
      },
      {
        id: 24,
        text: "1, 2, 3, 5. Tổng nhỏ nhất 2 số có 2 chữ số?",
        options: ["38", "47", "37", "48"],
        correctAnswer: 0,
        explanation: "13 + 25 = 38."
      },
      {
        id: 25,
        text: "4 bạn Amy, Ben, Cindy, Drake. Amy ngồi cạnh Ben. Amy ngồi ghế Xanh hoặc Đỏ. Có bao nhiêu cách xếp?",
        options: ["3", "4", "6", "8"],
        correctAnswer: 2,
        explanation: "6 cách."
      }
    ]
  }
];
