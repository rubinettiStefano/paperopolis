package com.generation.caaaaaaaaaalllllback;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/mannaggina")
public class MioController
{

	@GetMapping
	public List<Paperino> getTuttiPaperini()
	{
		Paperino paperino1 = new Paperino();
		paperino1.setId(1);
		paperino1.setUrlo("Quack!");
		paperino1.setCondanna("Condanna 1");

		Paperino paperino2 = new Paperino();
		paperino2.setId(2);
		paperino2.setUrlo("Quack Quack!");
		paperino2.setCondanna("Condanna 2");

		Paperino paperino3 = new Paperino();
		paperino3.setId(3);
		paperino3.setUrlo("Super Quack!");
		paperino3.setCondanna("Condanna 3");

		// Creazione della lista
		List<Paperino> paperinoList = new ArrayList<>();

		// Aggiunta degli oggetti alla lista
		paperinoList.add(paperino1);
		paperinoList.add(paperino2);
		paperinoList.add(paperino3);

		return paperinoList;
	}


	@PostMapping
	//qui arriva la request, con body: {"urlo":"yeeeeeeeeeee"}
	//viene creato in automatico un oggetto Paperino con
	//id=0
	//urlo = "yeeeeeeeeeee"
	//condanna = null
	public Paperino salvaPaperino(@RequestBody Paperino paperino)
	{
		System.out.println("Fate finta che lo stia salvando, gli metto io una condanna per dimostrarvelo");
		Random r = new Random();
		paperino.setId(r.nextInt(4,100));
		paperino.setCondanna("MANNAGGINA PAPEROTTO");

		//id= randomico
		//urlo = "yeeeeeeeeeee"
		//condanna = "MANNAGGINA PAPEROTTO"

		//ora lo salvo, fatto  ch.savePaperino(paperino);
		//ora lo restituisco come body della response
		return  paperino;
		//lui lo converte in automatico nel suo JSON
		//{"id":44,"urlo":"yeeeeeeeeeee","condanna":"MANNAGGINA PAPEROTTO"}
		//questo sarà il body della response
	}
}
