const data = {
  2015: {
    east: {
      teams: "克里夫蘭騎士 4-0 亞特蘭大老鷹",
      mvp: "LeBron James",
      starters: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"]
    },
    west: {
      teams: "金州勇士 4-2 休士頓火箭",
      mvp: "Andre Iguodala",
      starters: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andre Iguodala", "Harrison Barnes"]
    },
    finals: {
      teams: "金州勇士 4-2 克里夫蘭騎士",
      fmvp: "Andre Iguodala",
      startersEast: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"],
      startersWest: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andre Iguodala", "Harrison Barnes"]
    }
  },
  2016: {
    east: {
      teams: "克里夫蘭騎士 4-2 多倫多暴龍",
      mvp: "LeBron James",
      starters: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"]
    },
    west: {
      teams: "金州勇士 4-3 奧克拉荷馬雷霆",
      mvp: "Kevin Durant",
      starters: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant", "Andre Iguodala"]
    },
    finals: {
      teams: "克里夫蘭騎士 4-3 金州勇士",
      fmvp: "LeBron James",
      startersEast: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"],
      startersWest: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant", "Andre Iguodala"]
    }
  },
  2017: {
    east: {
      teams: "克里夫蘭騎士 4-0 波士頓塞爾提克",
      mvp: "LeBron James",
      starters: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"]
    },
    west: {
      teams: "金州勇士 4-0 聖安東尼奧馬刺",
      mvp: "Kevin Durant",
      starters: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant", "Andre Iguodala"]
    },
    finals: {
      teams: "金州勇士 4-1 克里夫蘭騎士",
      fmvp: "Kevin Durant",
      startersEast: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"],
      startersWest: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant", "Andre Iguodala"]
    }
  },
  2018: {
    east: {
      teams: "克里夫蘭騎士 4-3 波士頓塞爾提克",
      mvp: "LeBron James",
      starters: ["LeBron James", "Kevin Love", "J.R. Smith", "Larry Nance Jr.", "George Hill"]
    },
    west: {
      teams: "金州勇士 4-2 休士頓火箭",
      mvp: "Kevin Durant",
      starters: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant", "Andre Iguodala"]
    },
    finals: {
      teams: "金州勇士 4-0 克里夫蘭騎士",
      fmvp: "Kevin Durant",
      startersEast: ["LeBron James", "Kevin Love", "J.R. Smith", "Larry Nance Jr.", "George Hill"],
      startersWest: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant", "Andre Iguodala"]
    }
  },
  2019: {
    east: {
      teams: "多倫多暴龍 4-3 密爾瓦基公鹿",
      mvp: "Kawhi Leonard",
      starters: ["Kyle Lowry", "Danny Green", "Kawhi Leonard", "Pascal Siakam", "Marc Gasol"]
    },
    west: {
      teams: "金州勇士 4-0 波特蘭拓荒者",
      mvp: "Stephen Curry",
      starters: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevon Looney", "DeMarcus Cousins"]
    },
    finals: {
      teams: "多倫多暴龍 4-2 金州勇士",
      fmvp: "Kawhi Leonard",
      startersEast: ["Kyle Lowry", "Danny Green", "Kawhi Leonard", "Pascal Siakam", "Marc Gasol"],
      startersWest: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevon Looney", "DeMarcus Cousins"]
    }
  },
  2020: {
    east: {
      teams: "邁阿密熱火 4-2 波士頓塞爾提克",
      mvp: "Jimmy Butler",
      starters: ["Goran Dragic", "Duncan Robinson", "Jimmy Butler", "Bam Adebayo", "Jae Crowder"]
    },
    west: {
      teams: "洛杉磯湖人 4-1 丹佛金塊",
      mvp: "Anthony Davis",
      starters: ["LeBron James", "Danny Green", "Kentavious Caldwell-Pope", "Anthony Davis", "Alex Caruso"]
    },
    finals: {
      teams: "洛杉磯湖人 4-2 邁阿密熱火",
      fmvp: "LeBron James",
      startersEast: ["Goran Dragic", "Duncan Robinson", "Jimmy Butler", "Bam Adebayo", "Jae Crowder"],
      startersWest: ["LeBron James", "Danny Green", "Kentavious Caldwell-Pope", "Anthony Davis", "Alex Caruso"]
    }
  },
  2021: {
    east: {
      teams: "密爾瓦基公鹿 4-2 亞特蘭大老鷹",
      mvp: "Giannis Antetokounmpo",
      starters: ["Jrue Holiday", "Khris Middleton", "Giannis Antetokounmpo", "Brook Lopez", "P.J. Tucker"]
    },
    west: {
      teams: "鳳凰城太陽 4-2 洛杉磯快艇",
      mvp: "Chris Paul",
      starters: ["Chris Paul", "Devin Booker", "Mikal Bridges", "Jae Crowder", "Deandre Ayton"]
    },
    finals: {
      teams: "密爾瓦基公鹿 4-2 鳳凰城太陽",
      fmvp: "Giannis Antetokounmpo",
      startersEast: ["Jrue Holiday", "Khris Middleton", "Giannis Antetokounmpo", "Brook Lopez", "P.J. Tucker"],
      startersWest: ["Chris Paul", "Devin Booker", "Mikal Bridges", "Jae Crowder", "Deandre Ayton"]
    }
  },
  2022: {
    east: {
      teams: "波士頓塞爾提克 4-3 邁阿密熱火",
      mvp: "Jayson Tatum",
      starters: ["Marcus Smart", "Jaylen Brown", "Jayson Tatum", "Al Horford", "Robert Williams III"]
    },
    west: {
      teams: "金州勇士 4-1 達拉斯獨行俠",
      mvp: "Stephen Curry",
      starters: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andrew Wiggins", "Kevon Looney"]
    },
    finals: {
      teams: "金州勇士 4-2 波士頓塞爾提克",
      fmvp: "Stephen Curry",
      startersEast: ["Marcus Smart", "Jaylen Brown", "Jayson Tatum", "Al Horford", "Robert Williams III"],
      startersWest: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andrew Wiggins", "Kevon Looney"]
    }
  },
  2023: {
  east: {
    teams: "邁阿密熱火 4-3 波士頓塞爾提克",
    mvp: "Jimmy Butler",
    starters: ["Jimmy Butler", "Caleb Martin", "Bam Adebayo", "Max Strus", "Gabe Vincent"]
  },
  west: {
    teams: "丹佛金塊 4-0 洛杉磯湖人",
    mvp: "Nikola Jokic",
    starters: ["Jamal Murray", "Kentavious Caldwell-Pope", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokic"]
  },
  finals: {
    teams: "丹佛金塊 4-1 邁阿密熱火",
    fmvp: "Nikola Jokic",
    startersEast: ["Jimmy Butler", "Caleb Martin", "Bam Adebayo", "Max Strus", "Gabe Vincent"],
    startersWest: ["Jamal Murray", "Kentavious Caldwell-Pope", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokic"]
  }
},
  2024: {
    east: {
      teams: "波士頓塞爾提克 4-0 印第安那溜馬",
      mvp: "Jaylen Brown",
      starters: ["Jrue Holiday", "Derrick White", "Jaylen Brown", "Jayson Tatum", "Al Horford"]
    },
    west: {
      teams: "達拉斯獨行俠 4-1 明尼蘇達灰狼",
      mvp: "Luka Dončić",
      starters: ["Luka Dončić", "Kyrie Irving", "Josh Green", "Jaden Ivey", "Christian Wood"]
    },
    finals: {
      teams: "波士頓塞爾提克 4-1 達拉斯獨行俠",
      fmvp: "Jaylen Brown",
      startersEast: ["Jrue Holiday", "Derrick White", "Jaylen Brown", "Jayson Tatum", "Al Horford"],
      startersWest: ["Luka Dončić", "Kyrie Irving", "Josh Green", "Jaden Ivey", "Christian Wood"]
    }
  }
}