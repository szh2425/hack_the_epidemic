import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Linnia from '@linniaprotocol/linnia-js';

class App extends Component {
  componentDidMount = async () => {
    const linnia = new Linnia(window.web3, {
      linniaContractUpgradeHubAddress: '0xe0128323a808e5a3c00fd5accf8b2bd85a18d1e0'
    });

    const { records, permissions, users } = await linnia.getContractInstances();
    const accounts = window.web3.eth.accounts;

    // how to rehister a new user, change the from
    await users.register({from: accounts[0]});

    // unique identifier
    const dataHash = "0xcc85fc3d763b9a1d83e4386b37b4b0f3daf9881638ba8b7db0c501c417acb689";

    // what you want ublicly searchable
    const metadata = {
      dataFormat: "json",
      domain: "social media",
      storage: "local",
      encryptionScheme: "x25519-xsalsa20-poly1305",
      encryptionPublicKey: "hQYhHJpzZH/tGhz1wtqSjkL17tJSnEEC4yVGyNTHNQY=",
      linniajsVersion: "0.1.4",
      providerName: "Karina Chan",
      providerEthereumAddress: "0x349e31e92027f86b0ffeb5cd5e07003c7f229872",
      keywords: [ "socialmedia", "friends list", "people" ],
      dateofLastTransaction: "10/218/2018",
      creationDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    };

    const dataUri = "QmSg3jCiroFERczWdpFJUau5CofHfMKCSm5vZXSzn7sZGW";

    // from is who owns and pays, 
    const ethParams = {
      from: "0x0114d39D423fceaDf20bB7223C4a0B0C29C8748d", gas: 500000, gasPrice: 20000000000
    };
        // how to upload new record
    await linnia.addRecord(dataHash, metadata, dataUri, ethParams)

    var apiToken = unhash(dataUri);
    //make connection to mysql database
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: doctorName,
      password: doctorPassword; //only real doctors have access to SQL database --> permission control;
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    var genomicData = "";
    boolean predisposition;


    //if there's no pre-existing genetic analysis, search the genome for the relevant allele 
    if(!con.query("SELECT `geneticAnalysis` FROM `AllAnalysis` WHERE `membership`='7593847fhekf'", function (err, result))
    {
      //look for the allele in the genome. 
      var sql = "SELECT `geneticFile` FROM `AllGenomes` WHERE `membership`='7593847fhekf'"
      con.query(sql, function (err, result) {
          if (err) throw err;
          genomicData=result;
        });
      });

      //check to see if addiction genes are present and update the analysis document.
      predisposition = lookForAddiction(genomicData);

      if(predisposition)
      updateGeneticAnalysis(true);
      updateGeneticAnalysis(false);
    }

    //calling to database for genetic file 
    function lookForAddiction(genomicData) {
      boolean found = false;

      string addictionAllele = "ATCGATCG";
      found = search(genomicData, addictionAllele);

      return found;
    }

    //updating analysis document
    function updateGeneticAnalysis(true){
      con.query("UPDATE `AllAnalysis` SET `OPRM1` = 'Positive' WHERE `membership`='7593847fhekf';
", function (err) {
          if (err) throw err;
        });
      });
    }

    function updateGeneticAnalysis(false){
      con.query("UPDATE `AllAnalysis` SET `OPRM1` = 'Negative' WHERE `membership`='7593847fhekf';
", function (err) {
          if (err) throw err;
        });
      });
    }

    function alertDoctor(predisposition){
      if (predisposition) { alert("Warning! Predisposition for opioid addiction. ");};
    }
    //somewhere here you would update the blockchain using our genome smart contract
    //but I have no idea how to connect this logic with the solidity file so.... 
    
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <script>
      console.log(Promise);
      </script>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      </header>
      </div>
      );
  }
}

export default App;
