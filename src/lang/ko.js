const ko = {
	globals: {
		welcome: '잘왔다, deemix에',
		back: '뒤로',
		loading: '불러오는 중',
		download: '다운로드 {thing}',
		by: 'by {artist}',
		in: 'in {album}',
		download_hint: '다운로드',
		play_hint: '재생',
		toggle_download_tab_hint: '펼치기/접기',
		clean_queue_hint: '비우기 완료',
		cancel_queue_hint: '모두 취소',
		open_downloads_folder: '다운로드 폴더 열기',
		cut: '잘라내기',
		copy: '복사',
		copyLink: '링크 복사',
		copyImageLink: '이미지 링크 복사',
		copyDeezerLink: 'deezer 링크 복사',
		paste: '붙여넣기',
		listTabs: {
			empty: '',
			all: '전체',
			top_result: '가장 일치하는 결과',
			album: '앨범 | 앨범',
			artist: '아티스트 | 아티스트',
			single: '싱글 | 싱글',
			title: '제목 | 제목',
			track: '트랙 | 트랙',
			trackN: '0 트랙 | {n} 트랙 | {n} 트랙',
			releaseN: '0 발매 | {n} 발매 | {n} 발매',
			playlist: '재생목록 | 재생목록',
			compile: '편집 | 편집',
			ep: 'ep | eps',
			more: 'More albums',
			featured: '특집',
			spotifyPlaylist: '스포티파이 재생목록 | 스포티파이 재생목록',
			releaseDate: '발매일자',
			error: '오류'
		}
	},
	about: {
		titles: {
			usefulLinks: '유용한 링크',
			bugReports: '버그 제보',
			contributing: '기여자',
			donations: '후원',
			license: '이용정책'
		},
		subtitles: {
			bugReports: "무언가 안되는 것이 있다고요? 말해주세요!",
			contributing: '이 프로젝트에 기여하고 싶다고요? 어렵지 않아요!',
			donations: '금전적으로 지원하고 싶다고요? 후원하세요!'
		},
		usesLibrary: '이 프로그램은 <strong>deemix</strong> 라이브러리를 사용합니다, 해당 라이브러리로 자신만의 deemix를 만들 수 있습니다.',
		thanks: `이 프로젝트를 도와준 <strong>rtonno</strong>, <strong>uhwot</strong> 그리고 <strong>lollilol</strong>님과 아이콘을 만들어준 <strong>BasCurtiz</strong> 그리고 <strong>scarvimane</strong>님에게 감사를.`,
		upToDate: `새로운 업데이트 소식을 듣고 싶으면 텔레그램 <a href="https://t.me/RemixDevNews" target="_blank">새소식 정보통</a>을 참고하세요.`,
		officialWebsite: '공식 웹사이트',
		officialRepo: '공식 라이브러리 저장소',
		officialWebuiRepo: '공식 WebUI 저장소',
		officialSubreddit: '공식 서브레딧',
		newsChannel: '새 소식 알리미',
		questions: `프로그램에 대한 질문이나 문제에 관한 것은, 먼저 <a href="https://www.reddit.com/r/deemix" target="_blank">서브레딧</a>에서 답변을 검색해보세요. 그리고, 서브레딧에서 답변을 찾기 못한 경우에 다음 순서를 이용해주세요.`,
		beforeReporting: `버그 제보를 하기 전에 먼저 최신 버전의 프로그램을 실행하고 있는지, 제보하고자 하는 것이 버그이지 오로지 당신의 목적을 이루기 위한 요구가 아님을 확인해주세요.`,
		beSure: `해당 버그가 다른 장치에서도 재현이 가능한지 확인하고 이미 제보된 버그의 경우에는 중복해서 <strong>보고하지 마세요</strong>.`,
		duplicateReports: '중복된 버그 제보의 경우는 해당 요청을 닫을 것이니, 두 눈 뜨고 지켜보세요.',
		dontOpenIssues: `질문에 관한 것은 이슈를 <strong>열지 마세요</strong>, 서브레딧이 있습니다.`,
		newUI: `만약 당신이 파이썬에 능통하고 기본적인 라이브러리를 이용하여 새로운 UI를 만들었거나, 라이브러리의 버그를 수정하였다면 <a href="https://codeberg.org/RemixDev/deemix" target="_blank">저장소</a>에 풀 리퀘스트 해주세요.`,
		acceptFeatures: `복잡하지 않은 기능 추가도 받습니다, 라이브러리가 아닌 앱에서 직접 구현할 수 있는 것으로요.`,
		otherLanguages: `당신이 다른 프로그램 언어에 능통하면, 이 deemix 프로그램을 다른 프로그래밍 언어로 포팅할 수도 있습니다!`,
		understandingCode: `코드를 이해하는 데 도움이 필요합니까? 위에 있는 RemixDev, 텔레그램, 서브레딧 링크를 누르세요.`,
		contributeWebUI: `만약 당신이 Vue.js (JavaScript), HTML 또는 CSS 개발자라면 the <a href="https://codeberg.org/RemixDev/deemix-webui" target="_blank">WebUI</a>에 도움을 주세요.`,
		itsFree: `사용하기 전에 이 프로그램이 <strong>무료 프로젝트</strong>이고 개발자를 지원하기 전에 <strong>예술가들</strong>을 먼저 지원해야 함을 기억하세요.`,
		notObligated: `기부는 프로젝트를 지속할 수 있는 동력이 됩니다!`,
		lincensedUnder: `이 작업이 요구하고 있는 라이센스는 아래와 같습니다
			<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License 3.0</a>.`
	},
	charts: {
		title: '차트',
		changeCountry: '국가 변경',
		download: '차트 다운로드'
	},
	errors: {
		title: '오류 발생: {name}',
		ids: {
			unsupportedURL: 'URL 지원 누락',
			invalidURL: 'URL 인식 실패',
			ISRCnotOnDeezer: '트랙 코드 식별이 불가능합니다',
			notYourPrivatePlaylist: "다른 사람의 비공개 재생 목록을 다운로드 할 수 없습니다.",
			spotifyDisabled: '스포티파이 기능이 올바르게 설정되지 않았습니다.',
			trackNotOnDeezer: 'Deezer에서 트랙을 찾을 수 없습니다!',
			albumNotOnDeezer: 'Deezer에서 앨범을 찾을 수 없습니다!',
			notOnDeezer: 'Deezer에서 트랙을 찾을 수 없습니다!',
			notEncoded: '트랙이 아직 변환(encode)되지 않았습니다!',
			notEncodedNoAlternative: '트랙이 아직 변환(encode)되지 않았을 뿐더러 대체할 것을 찾지 못했습니다!',
			wrongBitrate: '요구하는 비트레이트의 트랙을 찾을 수 없습니다.',
			wrongBitrateNoAlternative: '요구하는 비트레이트를 찾을 수 없을 뿐더러 대체할 것을 찾지 못했습니다!',
			no360RA: '해당 트랙은 360 리얼리티 오디오에 존재하지 않습니다.',
			notAvailable: "해당 트랙은 Deezer 서버에 존재하지 않습니다!",
			notAvailableNoAlternative: "해당 트랙은 Deezer 서버에 존재하지 않을 뿐더러 대체할 것을 찾지 못했습니다!"
		}
	},
	favorites: {
		title: '즐겨듣는 음악',
		noPlaylists: '즐겨듣는 재생목록이 없습니다',
		noAlbums: '즐겨듣는 앨범이 없습니다',
		noArtists: '즐겨듣는 아티스트가 없습니다',
		noTracks: '즐겨듣는 트랙이 없습니다'
	},
	home: {
		needTologin: '다운로드를 시작하기 전에 Deezer 계정에 로그인을 해야합니다.',
		openSettings: '설정 열기',
		sections: {
			popularPlaylists: '인기있는 재생목록',
			popularAlbums: '가장 많이 재생된 앨범'
		}
	},
	linkAnalyzer: {
		info: '이 항목에서는 다운로드를 시도할 링크에 대한 더 많은 정보를 찾을 수 있습니다.',
		linkNotSupported: '해당 링크는 아직 지원하지 않습니다',
		useful: "접속한 국가에서는 재생할 수 없는 특정 트랙을 다운로드 하기 위해서 가능한 국가를 찾는데 유용하게 쓰입니다.",
		linkNotSupportedYet: '해당 링크는 아직 지원하지 않습니다, 다른 링크로 시도해보세요.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: '길이',
			diskNumber: '디스크 번호',
			trackNumber: '트랙 번호',
			releaseDate: '발매일자',
			bpm: 'BPM',
			label: '라벨',
			recordType: '녹음 종류',
			genres: '장르',
			tracklist: '트랙목록'
		}
	},
	search: {
		startSearching: '검색 중입니다!',
		description: '트랙, 아티스트, 재생목록, Deezer 링크 등으로 검색할 수 있습니다!',
		fans: '{n}명의 팬들',
		noResults: '결과 없음',
		noResultsTrack: '발견된 트랙 없음',
		noResultsAlbum: '발견된 앨범 없음',
		noResultsArtist: '발견된 아티스트 없음',
		noResultsPlaylist: '발견된 재생목록 없음'
	},
	searchbar: '원하는 것을 검색하세요 (링크를 붙여넣을 수도 있습니다)',
	downloads: '다운로드들',
	toasts: {
		restoringQueue: '다운로드 대기 열 복원중...',
		queueRestored: '다운로드 대기 열이 복원되었습니다!',
		addedToQueue: '대기열에 {item}(이)가 추가되었습니다',
		addedMoreToQueue: '대기열에 {n} 항목이 추가되었습니다',
		alreadyInQueue: '{item}(이)가 이미 대기열에 존재합니다!',
		finishDownload: '{item} 항목이 다운로드 완료되었습니다.',
		allDownloaded: '모든 다운로드가 완료되었습니다!',
		refreshFavs: '새로고침이 완료되었습니다!',
		loggingIn: '로그인 하는 중...',
		loggedIn: '로그인 되었습니다',
		alreadyLogged: '이미 로그인되어 있습니다',
		loginFailed: "로그인 할 수 없습니다",
		loggedOut: '로그아웃 하였습니다',
		cancellingCurrentItem: '현재 항목을 취소 중입니다.',
		currentItemCancelled: '항목이 취소되었습니다.',
		startAddingArtist: '{artist} 앨범을 대기열에 추가 중입니다',
		finishAddingArtist: '{artist} 앨범이 대기열에 추가되었습니다',
		startConvertingSpotifyPlaylist: '스포티파이 트랙을 Deezer 트랙으로 전환 중입니다',
		finishConvertingSpotifyPlaylist: '스프토파이 재생 목록이 전환되었습니다',
		loginNeededToDownload: '트랙을 다운로드하려면 로그인이 필요합니다!'
	},
	settings: {
		title: '설정',
		languages: '언어',
		login: {
			title: '로그인',
			loggedIn: '{username}(으)로 로그인되었습니다',
			arl: {
				question: 'ARL을 어떻게 확인합니까?',
				update: 'ARL 업데이트'
			},
			logout: '로그아웃'
		},
		appearance: {
			title: '외관',
			slimDownloadTab: '얇은 다운로드 탭'
		},
		downloadPath: {
			title: '다운로드 경로'
		},
		templates: {
			title: '템플릿',
			tracknameTemplate: '트랙이름 템플릿',
			albumTracknameTemplate: '앨범 트랙 템플릿',
			playlistTracknameTemplate: '재생목록 트랙 템플릿'
		},
		folders: {
			title: '폴더',
			createPlaylistFolder: '재생목록을 위한 폴더 생성',
			playlistNameTemplate: '재생목록 폴더 템플릿',
			createArtistFolder: '아티스트를 위한 폴더 생성',
			artistNameTemplate: '아티스트 폴더 템플릿',
			createAlbumFolder: '앨범을 위한 폴더 생성',
			albumNameTemplate: '앨범 폴더 템플릿',
			createCDFolder: 'CD를 위한 폴더 생성',
			createStructurePlaylist: '재생목록을 위한 폴더 구조 생성',
			createSingleFolder: '싱글 앨범을 위한 폴더 구조 생성'
		},
		trackTitles: {
			title: '트랙 제목',
			padTracks: '트랙 채워넣기',
			paddingSize: '채워넣을 크기',
			illegalCharacterReplacer: '지원하지 않는 글자 대체'
		},
		downloads: {
			title: '다운로드',
			queueConcurrency: '동시 다운로드',
			maxBitrate: {
				title: '선호하는 비트레이트',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: '파일을 덮어쓸까요?',
				y: '네, 파일을 덮어쓰세요',
				n: "아뇨, 파일을 덮어쓰지 마세요",
				t: '태그만 덮어쓰세요',
				b: '아뇨, 양쪽 다 놔두고 중복되는 파일에 번호를 추가하세요',
				e: "아뇨, 확장명을 변경하세요"
			},
			fallbackBitrate: '비트레이트 대비책',
			fallbackSearch: '검색 대비책',
			logErrors: '오류 발생시 로그 파일 생성',
			logSearched: '검색한 트랙에 대한 로그 파일 생성',
			createM3U8File: '재생목록 파일 생성',
			syncedLyrics: '.lyr 파일 생성 (가사 동기화)',
			playlistFilenameTemplate: '재생목록 파일이름 템플릿',
			saveDownloadQueue: '프로그램을 닫을 때 다운로드 대기열 저장'
		},
		covers: {
			title: '앨범 커버',
			saveArtwork: '커버 저장',
			coverImageTemplate: '커버 이름 템플릿',
			saveArtworkArtist: '아티스트 이미지 저장',
			artistImageTemplate: '아티스트 이미지 템플릿',
			localArtworkSize: '별도 그림 크기',
			embeddedArtworkSize: '내장된 그림 크기',
			localArtworkFormat: {
				title: '별도로 저장할 그림의 형식을 무엇으로 하시겠습니까?',
				jpg: 'jpeg 이미지',
				png: 'png 이미지',
				both: 'jpeg와 png 둘 다'
			},
			jpegImageQuality: 'JPEG 이미지 품질',
			embeddedArtworkPNG: '포함된 그림의 형식을 PNG로 저장합니다',
			embeddedPNGWarning: 'PNG는 Deezer에서 공식적으로 지원하지 않기 때문에 버그가 있을 수 있습니다',
			imageSizeWarning: 'x1200 크기를 초과해서는 Deezer에서 공식적으로 사용되지 않기 때문에 문제가 생길 수 있습니다'
		},
		tags: {
			head: '저장할 태그를 선택하세요',
			title: '제목',
			artist: '아티스트',
			album: '앨범',
			cover: '커버',
			trackNumber: '트랙 번호',
			trackTotal: '전체 트랙 크기',
			discNumber: '디스크 번호',
			discTotal: '전체 디스크 수',
			albumArtist: '앨범 아티스트',
			genre: '장르',
			year: '연도',
			date: '일자',
			explicit: '노골적 가사',
			isrc: 'ISRC',
			length: '트랙 길이',
			barcode: '앨범 바코드 (UPC)',
			bpm: 'BPM',
			replayGain: '리플레이 게인',
			label: '앨범 라벨',
			lyrics: '비동기 가사',
			copyright: '저작권',
			composer: '작곡가',
			involvedPeople: '관련있는 사람들'
		},
		other: {
			title: '기타',
			savePlaylistAsCompilation: '재생목록을 편집으로 저장',
			useNullSeparator: 'null 구분자 사용',
			saveID3v1: 'ID3v1 태그 형식으로 저장',
			multiArtistSeparator: {
				title: '아티스트를 어떻게 구분하시겠습니까?',
				nothing: '주요 아티스트만 저장',
				default: '표준 스펙을 사용',
				andFeat: '& 기호와 feat 사용.',
				using: '"{separator}" 사용'
			},
			singleAlbumArtist: '주요 앨범 아티스트만 저장',
			albumVariousArtists: '앨범 아티스트에 "Various Artists"(다양한 아티스트들) 유지',
			removeAlbumVersion: '트랙 제목에 "Album Version"(앨범 버전) 제거',
			removeDuplicateArtists: '아티스트들의 협업 제거',
			dateFormat: {
				title: 'FLAC 파일의 날짜 형식',
				year: 'YYYY',
				month: 'MM',
				day: 'DD'
			},
			featuredToTitle: {
				title: '특집에 참여한 아티스트들에 할 수 있는 것이 무엇이 있나요?',
				0: '아무것도 하지 않음',
				1: '제목에서 제거',
				3: '앨범 제목과 트랙에서 제거',
				2: '제목으로 이동'
			},
			titleCasing: '제목 케이싱',
			artistCasing: '아티스트 케이싱',
			casing: {
				nothing: '변함없이 유지',
				lower: '소문자로',
				upper: '대문자로',
				start: '각 단어 앞 글자를 대문자로',
				sentence: '문장처럼'
			},
			previewVolume: '미리듣기 볼륨',
			executeCommand: {
				title: '다운로드 후 실행할 명령어',
				description: '빈칸으로 두면 아무 일도 없습니다'
			}
		},
		spotify: {
			title: '스포티파이 기능',
			clientID: 'Spotify ClientID',
			clientSecret: 'Spotify Client Secret',
			username: 'Spotify 사용자이름'
		},
		reset: '기본 설정으로 초기화',
		save: '저장',
		toasts: {
			init: '설정을 불러왔습니다!',
			update: '새로운 설정으로 갱신되었습니다!',
			ARLcopied: 'ARL가 클립보드에 복사되었습니다'
		}
	},
	sidebar: {
		home: '홈',
		search: '검색',
		charts: '차트',
		favorites: '즐겨찾기',
		linkAnalyzer: '링크 분석기',
		settings: '설정',
		about: '정보'
	},
	tracklist: {
		downloadSelection: '다운로드 구간'
	}
}

export default ko
