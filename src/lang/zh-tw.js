const zh_tw = {
	globals: {
		welcome: '歡迎使用 deemix',
		back: '返回',
		loading: '載入中',
		download: '下載 {thing}',
		by: '{artist}',
		in: '於 {album}',
		download_hint: '下載',
		play_hint: '播放',
		toggle_download_tab_hint: '展開/折疊',
		clean_queue_hint: '清除完成',
		cancel_queue_hint: '取消全部',
		open_downloads_folder: '開啟下載資料夾',
		cut: '剪下',
		copy: '複製',
		copyLink: '複製連結',
		copyImageLink: '複製圖片連結',
		copyDeezerLink: '複製 deezer 連結',
		paste: '貼上',
		listTabs: {
			empty: '',
			all: '所有',
			top_result: '最佳結果',
			album: '專輯|專輯',
			artist: '藝人|藝人',
			single: '單曲',
			title: '標題|標題',
			track: '歌曲|歌曲',
			trackN: '0 首歌曲| {n} 首歌曲| {n} 首歌曲',
			releaseN: '0 發行| {n} 發行| {n} 發行',
			playlist: '播放清單|播放清單',
			compile: '合輯|合輯',
			ep: '迷你專輯 | 迷你專輯',
			bundle: 'bundle | bundles',
			more: '更多專輯',
			featured: '出現於',
			spotifyPlaylist: 'Spotify 播放清單 | Spotify 播放清單',
			releaseDate: '發布日期',
			error: '錯誤'
		}
	},
	about: {
		updates: {
			currentVersion: '目前版本',
			versionNotAvailable: 'N/A',
			updateAvailable: `您尚未更新至最新版本：{version}`,
			deemixVersion: 'deemix 函示庫版本'
		},
		titles: {
			usefulLinks: '實用連結',
			bugReports: '錯誤報告',
			contributing: '貢獻',
			donations: '贊助',
			license: '使用許可'
		},
		subtitles: {
			bugReports: "使用 deemix 時，遇到了什麼問題嗎？歡迎回報錯誤！",
			contributing: '您想替這個專案提出貢獻嗎？您可以透過許多不同的方式來幫忙！',
			donations: '您想要捐款嗎？可以贊助我們！'
		},
		usesLibrary: '本程式基於 <strong>deemix</strong> 函示庫。您可以使用該函示庫來製作自己的前端。',
		thanks: `感謝 <strong>rtonno</strong>、<strong>uhwot</strong> 及 <strong>lollilol</strong> 對於本專案的貢獻，另外也感謝 <strong>BasCurtiz</strong> 及 <strong>scarvimane</strong> 幫忙製作本專案的圖示`,
		upToDate: `您可於 Telegram 上關注<a href="https://t.me/RemixDevNews" target="_blank">最新消息頻道</a>以取得最新動態。`,
		officialWebsite: '官方網站',
		officialRepo: '官方函示版本庫',
		officialWebuiRepo: '官方 WebUI 版本庫',
		officialSubreddit: '官方 Subreddit',
		newsChannel: '最新消息頻道',
		questions: `如果您對本程式有疑問或問題，請先在<a href="https://www.reddit.com/r/deemix" target="_blank"> subreddit </a>上搜尋解決方案。如果找不到任何解決方法，則可以在我們的 subreddit 上發布與您問題相關的文章。`,
		beforeReporting: `在報告錯誤之前，請確保您正在運行最新版本的程式，並且要報告的內容真的是一個錯誤，而不僅是您自己遇到的問題。`,
		beSure: `請確保您所想回報的錯誤可在其他台裝置上再現的，並且<strong>請勿</strong>回報已知錯誤。`,
		duplicateReports: '請注意，重複的錯誤報告將被移除。',
		dontOpenIssues: `<strong>請勿</strong>透過本版本庫的 Issues 問問題，我們開 subreddit 是有原因的。`,
		newUI: `如果您精通 Python，則可以嘗試使用我們的函示庫來建立新的 UI，或者透過<a href ="https://codeberg.org/RemixDev/ deemix" target ="_ blank">我們的版本庫</a>提出錯誤相關的 PR。`,
		acceptFeatures: `我也歡迎你提交新的功能－但前提是這個功能不能過於複雜－過於複雜的功能，應被新增至程式內而非函示庫內。`,
		otherLanguages: `如果您精通其他程式語言，你也可以嘗試將 deemix 移植到其他程式語言中！`,
		understandingCode: `你需要幫助了解本專案的程式碼嗎？只需在 Telegram 或 Reddit 上按一下 RemixDev。`,
		contributeWebUI: `如果你熟悉 Vue.js（JavaScript）、HTML 或 CSS，你也可以參與 <a href="https://codeberg.org/RemixDev/deemix-webui" target="_blank">WebUI</a> 前端的貢獻。`,
		itsFree: `記得，<strong>這是一個免費的專案</strong>，<strong>在支持開發人員之前，應該先支持你喜歡的歌手或藝人</ strong>。`,
		notObligated: `別認為你有義務捐款，無論如何我們都感謝您！`,
		lincensedUnder: `本作品使用 
			<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License 3.0</a> 許可授權。`
	},
	charts: {
		title: '排行榜',
		changeCountry: '改變國家',
		download: '下載排行榜'
	},
	errors: {
		title: '{name} 的錯誤',
		ids: {
			invalidURL: '無法識別網址',
			unsupportedURL: '尚不支持此網址',
			ISRCnotOnDeezer: '無法在 Deezer 上使用單曲 ISRC',
			notYourPrivatePlaylist: "您無法下載他人的私人播放清單。",
			spotifyDisabled: 'Spotify 功能未正確設定。',
			trackNotOnDeezer: '在 Deezer 上找不到此歌曲！',
			albumNotOnDeezer: '在 Deezer 上找不到此專輯！',
			notOnDeezer: '無法在 Deezer 上載入此歌曲！',
			notEncoded: '本歌曲尚未編碼！',
			notEncodedNoAlternative: '本歌曲尚未編碼，且無法找到其他替代歌曲！',
			wrongBitrate: '找不到符合所設位元率的歌曲。',
			wrongBitrateNoAlternative: '找不到符合所設位元率的歌曲，且無法找到其他替代歌曲！',
			no360RA: '本歌曲並不支援 Reality Audio 360。',
			notAvailable: "無法在 Deezer 伺服器載入此歌曲！",
			notAvailableNoAlternative: "無法在 Deezer 伺服器載入此歌曲，且無法找到其他替代歌曲！",
			noSpaceLeft: "本裝置可用空間已用盡！",
			albumDoesntExists: "本歌曲的專輯不存在，無法取得資訊"
		}
	},
	favorites: {
		title: '收藏',
		noPlaylists: '尚未收藏任何播放清單',
		noAlbums: '尚未收藏任何專輯',
		noArtists: '尚未收藏任何藝人',
		noTracks: '尚未收藏任何歌曲'
	},
	home: {
		needTologin: '您需要先登入 Deezer 帳戶，然後才能開始下載。',
		openSettings: '開啟設定',
		sections: {
			popularPlaylists: '熱門播放清單',
			popularAlbums: '熱門專輯'
		}
	},
	linkAnalyzer: {
		info: '您可以透過此工具取得您所想下載的連結的相關資訊。',
		useful: "比如，當您所想下載的歌曲無法在您的國家播放，且您想知道哪些國家可以播放此歌曲時，您可使用此工具。",
		linkNotSupported: '尚未支援此連結',
		linkNotSupportedYet: '我們似乎尚未支援此連結，請改用其他連結。',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: '長度',
			diskNumber: '光碟編號',
			trackNumber: '歌曲編號',
			releaseDate: '發布日期',
			bpm: 'BPM',
			label: '標籤',
			recordType: '媒體類型',
			genres: '類型',
			tracklist: '歌曲清單'
		}
	},
	search: {
		startSearching: '開始搜尋！',
		description: '您可以搜索歌曲名稱、專輯、藝人、播放清單...等等。您也可以直接貼上 Deezer 網址。',
		fans: '{n} 個粉絲',
		noResults: '無搜尋結果',
		noResultsTrack: '找不到歌曲',
		noResultsAlbum: '找不到專輯',
		noResultsArtist: '找不到藝人',
		noResultsPlaylist: '找不到播放清單'
	},
	searchbar: '搜尋任何關鍵字（或貼上連結）',
	downloads: '下載',
	toasts: {
		restoringQueue: '正在恢復下載清單...',
		queueRestored: '下載清單已恢復！',
		addedToQueue: '已新增 {item} 到下載清單中',
		addedMoreToQueue: '已新增 {n} 個項目到下載清單中',
		alreadyInQueue: '{item} 已在下載清單中！',
		finishDownload: '{item} 已完成下載。',
		allDownloaded: '全部下載完成！',
		refreshFavs: '刷新完成！',
		loggingIn: '登入中...',
		loggedIn: '登入',
		alreadyLogged: '已登入',
		loginFailed: "無法登入",
		loggedOut: '登出',
		cancellingCurrentItem: '取消當前項目。',
		currentItemCancelled: '當前項目已取消。',
		startAddingArtist: '已新增 {artist} 個專輯到下載清單中',
		finishAddingArtist: '已新增 {artist} 個專輯到下載清單中',
		startConvertingSpotifyPlaylist: '將 Spotify 歌曲轉換為 Deezer 歌曲中',
		finishConvertingSpotifyPlaylist: '已轉換 Spotify 播放清單',
		loginNeededToDownload: '您需要登入才能下載歌曲！',
		deezerNotAvailable: 'Deezer 在您所在的國家/地區無法使用。請您使用 VPN。'
	},
	settings: {
		title: '設定',
		languages: '語言',
		login: {
			title: '登入',
			loggedIn: '目前以 {username} 的身份登入',
			arl: {
				question: '如何取得自己的 ARL？',
				update: '更新 ARL'
			},
			logout: '登出',
			login: '透過 deezer.com 登入'
		},
		appearance: {
			title: '外觀',
			slimDownloadTab: '薄型下載分頁'
		},
		downloadPath: {
			title: '下載目錄'
		},
		templates: {
			title: '檔案名稱格式',
			tracknameTemplate: '單曲名稱格式',
			albumTracknameTemplate: '專輯單曲名稱格式',
			playlistTracknameTemplate: '播放清單單曲名稱格式'
		},
		folders: {
			title: '資料夾',
			createPlaylistFolder: '替播放清單建立資料夾',
			playlistNameTemplate: '播放清單資料夾名稱格式',
			createArtistFolder: '替藝人建立資料夾',
			artistNameTemplate: '藝人資料夾名稱格式',
			createAlbumFolder: '替專輯建立資料夾',
			albumNameTemplate: '專輯資料夾名稱格式',
			createCDFolder: '替 CD 建立資料夾',
			createStructurePlaylist: '建立播放清單資料夾結構',
			createSingleFolder: '建立單曲資料夾結構'
		},
		trackTitles: {
			title: '單曲名稱',
			padTracks: '歌曲數目字串填充',
			paddingSize: '覆蓋數目字串填充長度',
			illegalCharacterReplacer: '替換非法字元'
		},
		downloads: {
			title: '下載',
			queueConcurrency: '並行下載',
			maxBitrate: {
				title: '偏好位元率',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: '是否要覆蓋檔案？',
				y: '是，覆蓋檔案',
				n: "否，請勿覆蓋檔案",
				t: '僅覆蓋標籤',
				b: '否，保留兩個檔案並在重複的檔名中加入一個數字',
				e: "否，不顧慮附檔名"
			},
			fallbackBitrate: '當偏好位元率無法下載時，下載其他版本',
			fallbackSearch: '當搜尋結果無法使用時，使用其他搜尋結果',
			logErrors: '記錄錯誤至日誌',
			logSearched: '記錄搜尋歌曲至日誌',
			createM3U8File: '建立播放清單檔案',
			syncedLyrics: '建立 .lyr 檔案（同步歌詞）',
			playlistFilenameTemplate: '播放清單檔名格式',
			saveDownloadQueue: '關閉應用程式時，保存下載清單'
		},
		covers: {
			title: '專輯封面',
			saveArtwork: '保存封面',
			coverImageTemplate: '封面檔名格式',
			saveArtworkArtist: '保存藝人照片',
			artistImageTemplate: '藝人照片檔名格式',
			localArtworkSize: '本地圖片大小',
			embeddedArtworkSize: '嵌入圖片大小',
			localArtworkFormat: {
				title: '您希望本地圖片採用哪種格式？',
				jpg: 'JPEG',
				png: 'PNG',
				both: 'JPEG 及 PNG'
			},
			jpegImageQuality: 'JPEG 影像品質',
			embeddedArtworkPNG: '將嵌入式圖片存為 PNG',
			embeddedPNGWarning: 'Deezer 官方並不支援 PNG，結果可能有誤',
			imageSizeWarning: 'Deezer 官方並不使用高於 x1200 的圖片，您可能會遇到問題',
			coverDescriptionUTF8: '使用 UTF8 保存封面敘述（修正 iTunes 專輯封面)'
		},
		tags: {
			head: '要保存哪些標籤',
			title: '標題',
			artist: '藝人',
			album: '專輯',
			cover: '專輯封面',
			trackNumber: '單曲編號',
			trackTotal: '總計歌曲',
			discNumber: '光碟編號',
			discTotal: '光碟總數',
			albumArtist: '專輯藝人',
			genre: '類型',
			year: '年',
			date: '日期',
			explicit: '不良歌詞',
			isrc: 'ISRC',
			length: '單曲長度',
			barcode: '專輯條碼（UPC）',
			bpm: 'BPM',
			replayGain: '重播增益（Replay Gain）',
			label: '專輯標籤',
			lyrics: '不同步的歌詞',
			syncedLyrics: '同步歌詞',
			copyright: '版權',
			composer: '作曲家',
			involvedPeople: '相關藝人'
		},
		other: {
			title: '其他',
			savePlaylistAsCompilation: '將播放清單儲存為合輯',
			useNullSeparator: '使用空分隔符',
			saveID3v1: '保存 ID3v1 標籤',
			multiArtistSeparator: {
				title: '如何隔開作者名稱？',
				nothing: '僅保留主作者',
				default: '使用標準規格',
				andFeat: '使用 & 及 feat.',
				using: '使用 "{separator}"'
			},
			singleAlbumArtist: '僅儲存專輯主作者名稱',
			albumVariousArtists: '於專輯作者欄位中保留「多位藝人 (Various Artists)」字樣',
			removeAlbumVersion: '於單曲名稱中移除「專輯版本 (Album Version)」字樣',
			removeDuplicateArtists: '移除重複的作者名稱',
			dateFormat: {
				title: 'FLAC 檔案日期格式',
				year: 'YYYY',
				month: 'MM',
				day: 'DD'
			},
			featuredToTitle: {
				title: '如何處理客串藝人名稱 (如 feat. 等字樣) ？',
				0: '什麼都不做',
				1: '從標題中刪除',
				3: '從標題和專輯標題中刪除',
				2: '將其移至標題'
			},
			titleCasing: '歌曲名稱大小寫',
			artistCasing: '藝人名稱大小寫',
			casing: {
				nothing: '保持不變',
				lower: '小寫',
				upper: '大寫',
				start: '字詞開頭大寫',
				sentence: '句子大寫'
			},
			previewVolume: '預覽音量',
			executeCommand: {
				title: '下載後執行指令',
				description: '留空則不執行'
			}
		},
		spotify: {
			title: 'Spotify 功能',
			clientID: 'Spotify 客戶端 ID',
			clientSecret: 'Spotify 客戶端密碼',
			username: 'Spotify 用戶名',
			question: '如何啟用 Spotify 功能？'
		},
		reset: '重設至預設',
		save: '儲存',
		toasts: {
			init: '已載入設定！',
			update: '已更新設定！',
			ARLcopied: '已複製 ARL 到剪貼簿中'
		}
	},
	sidebar: {
		home: '首頁',
		search: '搜尋',
		charts: '排行榜',
		favorites: '收藏',
		linkAnalyzer: '連結分析',
		settings: '設定',
		about: '關於'
	},
	tracklist: {
		downloadSelection: '下載所選'
	}
}

export default zh_tw