addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
	if (request.method === "POST") {
		const fd = await request.formData();
		const sjad = fd.get('sjad');
		const rqm = fd.get('rqm');
		if (sjad !== '' && rqm !== ''){
			for (let i = 0; i < rqm; i++){
				const data = await fetch(`https://api.telegram.org/bot6856494786:AAGbj90UvHfL2RPs-HCDb8D2g2wHlmVZS3Y/sendMessage?chat_id=-6480288476&text=${sjad}`).then(resp => resp.json())
			}
		}
	}
	return new Response("<form method='post'><input name='sjad'><input name='rqm'><button type='submit'>ارسال</button></form>")
}