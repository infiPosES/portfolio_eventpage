window.onload = function() {
	let seodipeInfo = document.getElementById('seodipeInfo'); //전시소개 설명글1버튼
	let seogumpeInfo = document.getElementById('seogumpeInfo'); //전시소개 설명글2버튼
	let seodipeDes = document.getElementById('seodipeDes'); //전시소개 설명글1
	let seogumpeDes = document.getElementById('seogumpeDes'); //전시소개 설명글2
	let closeDes1 = document.getElementById('closeDes1'); //전시소개 설명글 닫기1
	let closeDes2 = document.getElementById('closeDes2'); //전시소개 설명글 닫기2
	let eTitle = document.getElementById('eTitle'); //타이틀
	let eIntro = document.getElementById('eIntro'); //전시소개
	let eInfo = document.getElementById('eInfo'); //전시안내
	let eDate = document.getElementById('eDate'); //전시일정
	let eAddress = document.getElementById('eAddress'); //오시는길
	let linkAddress = document.getElementById('linkAddress'); //오시는길 이동
	let linkParking = document.getElementById('linkParking'); //주차안내 이동
	let floor1 = document.getElementById('floor1'); //1층 부스 안내도
	let floor2 = document.getElementById('floor2'); //2층 부스 안내도
	let button1floor = document.getElementById('button1floor'); //1층 부스 안내 버튼
	let button2floor = document.getElementById('button2floor'); //2층 부스 안내 버튼
	let backtotopI = document.getElementById('backtotopI'); //맨위로 버튼
	let closeAlert = document.getElementById('closeAlert');//포트폴리오 알림 닫기
	let closeTable = document.getElementById('closeTable');//헤더 우측 검색 후 창닫기 버튼
	//click 이벤트
	this.addEventListener('click', function(e) {
		switch(e.target.id) {
			//메뉴버튼	
			case 'eTitle': location="#"; break; //메인
			case 'eIntro':
				location="#sectionIntro"; break; //전시소개
			case 'eInfo': 
				location="#sectionInfo"; break; //관람안내
			case 'eDate': 
				location="#sectionDate"; break; //전시일정
			case 'eAddress': 
				location="#sectionAddress"; break; //오시는길
			//전시소개 관련
			case 'seodipeInfo': //서디페 소개 버튼 클릭
				seodipeInfo.style.backgroundColor="#FAE6E6";
				seogumpeInfo.style.backgroundColor="white";
				seodipeDes.style.visibility = "visible";
				seogumpeDes.style.visibility = "hidden"; break;
			case 'seogumpeInfo': //서금페 소개 버튼 클릭
				seogumpeInfo.style.backgroundColor="#FAE6E6";
				seodipeInfo.style.backgroundColor="white";
				seogumpeDes.style.visibility = "visible";
				seodipeDes.style.visibility = "hidden"; break;
			case 'closeDes1' : //서디페 소개 내 창닫기 버튼
				seogumpeInfo.style.backgroundColor="white";
				seodipeInfo.style.backgroundColor="white";
				seodipeDes.style.visibility = "hidden"; break;
			case 'closeDes2' : //서금페 소개 내 창닫기 버튼
				seogumpeInfo.style.backgroundColor="white";
				seodipeInfo.style.backgroundColor="white";
				seogumpeDes.style.visibility = "hidden"; break;
			//전시일정-일정표 관련
			case 'linkAddress': location="#sectionAddress"; break; //주소 자세히 보기
			case 'linkParking': location="#parking"; break; //주차 자세히 보기
			//전시일정-전시장 안내도 관련
			case 'button1floor':
				button1floor.style.backgroundColor="#FAE6E6";
				button2floor.style.backgroundColor="white";
				floor1.style.visibility = "visible";
				floor2.style.visibility = "hidden";
				break; //1층 전시장 안내도 버튼 클릭
			case 'button2floor' : 
				button1floor.style.backgroundColor="white";
				button2floor.style.backgroundColor="#FAE6E6";
				floor1.style.visibility = "hidden";
				floor2.style.visibility = "visible";
				break;
			case 'backtotopI' : location="#"; break; //맨 위로
			case 'closeAlert' : document.getElementById('alertPortfolio').style.display="none"; break; //포트폴리오 알림창 닫기
			case 'closeTable' : 
				closeTable.style.display='none';
				document.getElementById('qBoothTable').style.display="none";
				document.getElementById('qFindBooth').value=""; break;
		}
		//검색결과창 클릭시 전시장 안내도로 이동, 해당 위치 안내
		if(e.target.className.indexOf("booth1Floor")>-1 || e.target.className.indexOf("booth2Floor")>-1) {
			document.getElementById('qBoothTable').style.display="none";
			location="#guideMap";
			if(e.target.className.indexOf("booth1Floor")>-1) {
				button1floor.style.backgroundColor="#FAE6E6";
				button2floor.style.backgroundColor="white";
				floor1.style.visibility = "visible";
				floor2.style.visibility = "hidden";
			}
			if(e.target.className.indexOf("booth2Floor")>-1) {
				button1floor.style.backgroundColor="white";
                                button2floor.style.backgroundColor="#FAE6E6";
	                        floor1.style.visibility = "hidden";
                                floor2.style.visibility = "visible";
			}
		}
	});
	//keyup 이벤트
	let boothInput = document.getElementById('boothInput');
	let qFindBooth = document.getElementById('qFindBooth');
	this.addEventListener('keyup', function (e) {
		switch(e.target.id) {
			// 메뉴 부스 검색
			case "qFindBooth": 
				let qTable = document.getElementById('qTable');
				let qBoothTable = document.getElementById('qBoothTable');
				let closeTable = document.getElementById('closeTable');
				qBoothTable.style.display='block';
				closeTable.style.display='block';
				let qfilter, qtr, qtd, j, qtextValue;
				qfilter = qFindBooth.value.toUpperCase();
				qtr = qTable.getElementsByTagName('tr');
				j=0;
				while(j<qtr.length) {
					qtd = qtr[j].getElementsByTagName('td')[0];
					if (qtd) {
						qtextValue = qtd.textContent || qtd.innerText;
						if (qtextValue.toUpperCase().indexOf(qfilter)>-1) {
							qtr[j].style.display="";
						}
						else {
							qtr[j].style.display="none";
						}
					}
					j++;
				}
				if (qFindBooth.value == "") {
					closeTable.style.display='none';
					qBoothTable.style.display='none';
				}
				break;
			//전시장 부스 검색
			case "boothInput":
				let boothTable = document.getElementById('boothTable');
				let findBoothTable = document.getElementById('findBoothTable');
				findBoothTable.style.display='block';

				let filter, tr, td, i, textValue;
				filter = boothInput.value.toUpperCase();
				tr = boothTable.getElementsByTagName('tr');
				i=0;
				while(i<tr.length) {
					td = tr[i].getElementsByTagName('td')[0];
					if (td) {
						textValue = td.textContent || td.innerText;
						if (textValue.toUpperCase().indexOf(filter)>-1) {
							tr[i].style.display="";
						}
						else {
							tr[i].style.display="none";
						}
					}
					i++;
				}
				if (boothInput.value == "") {
					findBoothTable.style.display='none';
				}
				break;
		}
	});
	//scroll이벤트
	this.addEventListener('scroll', function(e) {
		let docElem = document.documentElement;
		let docHeight = docElem.scrollHeight;
		let gnb = document.getElementById('gnb');
		let eLogo = document.getElementById('eLogo');
		let scrollPos = window.scrollY;
		// 메뉴
		if (scrollPos > 750) {
			gnb.style.backgroundColor = "#e9625f";
			gnb.style.color= "white";
		}
		else {
			gnb.style.backgroundColor= "transparent";
			gnb.style.color= "#fae6e6";
		}
		//맨위로 버튼
		let backtotop = document.getElementById('backtotop');
		if (scrollPos > 1000) {
			backtotop.style.opacity = 1;
		}
		else {
			backtotop.style.opacity = 0;
		}
	});
}
