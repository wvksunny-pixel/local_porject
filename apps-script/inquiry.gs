/**
 * LOCAL, BUT IMPACTFUL. 협력 문의 접수용 Google Apps Script
 *
 * 설치 방법
 * 1. 문의를 모을 구글 시트를 새로 만들고, [확장 프로그램] → [Apps Script]를 엽니다.
 * 2. 이 파일 내용을 그대로 붙여 넣고 저장합니다.
 * 3. NOTIFY_EMAIL에 문의 알림을 받을 주소를 넣습니다. 알림이 필요 없으면 비워 둡니다.
 * 4. [배포] → [새 배포] → 유형 '웹 앱'
 *    - 실행 사용자: 나
 *    - 액세스 권한: 모든 사용자
 * 5. 발급된 웹 앱 URL을 index.html 맨 아래 스크립트의 FORM_ENDPOINT 값에 넣습니다.
 */

var SHEET_NAME = '문의';
var NOTIFY_EMAIL = '';

var HEADERS = ['접수 시각', '이름', '기업명', '부서·직함', '이메일', '연락처',
  '사업장 지역', '관심 사회문제', '활용 가능 자원', '관심 사례', '희망 시기', '문의 내용', '개인정보 동의', '접수 페이지'];

function doPost(e) {
  var p = (e && e.parameter) || {};
  if (!p.name || !p.company || !p.email || p.consent !== '동의') {
    return ContentService.createTextOutput('invalid');
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([new Date(), p.name, p.company, p.title || '', p.email, p.phone || '',
    p.region || '', p.issue || '', p.resource || '', p.cases || '', p.timing || '',
    p.message || '', p.consent, p.page || '']);

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL,
      '[LOCAL, BUT IMPACTFUL.] 새 협력 문의 · ' + p.company,
      p.company + ' ' + p.name + ' (' + p.email + ')\n' +
      '지역: ' + (p.region || '-') + '\n' +
      '관심 문제: ' + (p.issue || '-') + '\n' +
      '자원: ' + (p.resource || '-') + '\n' +
      '관심 사례: ' + (p.cases || '-') + '\n' +
      '시기: ' + (p.timing || '-') + '\n\n' + (p.message || ''));
  }

  return ContentService.createTextOutput('ok');
}
