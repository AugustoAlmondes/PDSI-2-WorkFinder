<<<<<<< HEAD
export default function searchJob(list, value) {
    let selection = []
    list.forEach(job => {
        if(
            job.title === value || 
            job.enterprise === value ||
            job.modality === value ||
            job.contractType === value ||
            job.areaActivity === value ||
            job.local === value
        ) {
            console.log("Achou aqui");
            selection.push(job);
        }
    })

    return selection;
=======
export default function searchJob(list, value) {
    let selection = []
    list.forEach(job => {
        if(
            job.title === value || 
            job.enterprise === value ||
            job.modality === value ||
            job.contractType === value ||
            job.areaActivity === value ||
            job.local === value
        ) {
            console.log("Achou aqui");
            selection.push(job);
        }
    })

    return selection;
>>>>>>> cfac7b4dcd7b467c6c765cc6769be48a67a5e6be
}