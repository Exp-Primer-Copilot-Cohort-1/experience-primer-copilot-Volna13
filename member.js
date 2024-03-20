function skillsMember() {
    return {
        name: 'Member',
        skills: ['JavaScript', 'React', 'Redux'],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            }, this);
        }
    };
}