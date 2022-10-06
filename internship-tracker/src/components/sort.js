function sortF(a, b){
	if (new Date(a.offer) > new Date(b.offer)){
		return 1
	} else if (new Date(a.offer) < new Date(b.offer)){
		return -1
	}

	if (new Date(a.application) > new Date(b.application)){
		return -1
	} else if (new Date(a.application) < new Date(b.application)){
		return 1
	} else {
		return 0
	}

	if (new Date(a.oa) > new Date(b.oa)){
		return -1
	} else if (new Date(a.oa) < new Date(b.oa)){
		return 1
	} else {
		return 0
	}

	if (new Date(a.interview) > new Date(b.interview)){
		return -1
	} else if (new Date(a.interview) < new Date(b.interview)){
		return 1
	} else {
		return 0
	}

	if (new Date(a.rejected) < new Date(b.rejected)){
		return -1
	} else if (new Date(a.rejected) > new Date(b.rejected)){
		return 1
	} else {
		return 0
	}
}

export default sortF